import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {
  IconRefresh,
  IconStart,
  IconStop,
  LoginBackground,
} from '../../Assets/Images';
import {RNCamera} from 'react-native-camera';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Feather';

const RecordBattle = ({navigation}:any) => {
  // 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  const cameraRef = useRef(null);
  const soundRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    return () => {
      // Stop and release the sound resources when the component is unmounted
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.release();
      }
    };
  }, []);

  const startRecording = async () => {
    setIsRecording(true);
    setIsPaused(false);

    //   const { selectedMusic } = route.params;
    const selectedMusic =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

    // Initialize the sound object
    soundRef.current = new Sound(selectedMusic, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }

      // Loaded successfully, you can play the sound now
      soundRef.current.play();
    });

    if (cameraRef.current) {
      const options = {quality: RNCamera.Constants.VideoQuality['720p']};

      // Check if the recording is paused, resume if true, start a new recording otherwise
      if (isPaused) {
        await cameraRef.current.resumeRecording();
      } else {
        const {uri, codec = 'mp4'} = await cameraRef.current.recordAsync(
          options,
        );
        console.log('Recording URI:', uri);
      }
    }
  };

  const pauseRecording = async () => {
    setIsPaused(true);

    if (cameraRef.current) {
      await cameraRef.current.pauseRecording();
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);

    if (cameraRef.current) {
      cameraRef.current.stopRecording();
    }

    // Stop the sound when recording is manually stopped
    if (soundRef.current) {
      soundRef.current.stop();
    }
    navigation.navigate('upload-dance')
  };

  const restartRecording = () => {
    if (!isRecording) {
      startRecording();
    }
  };
  return (
    <View className="flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="flex-1">
        <RNCamera
          ref={cameraRef}
          style={styles.cameraPreview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={true}
        />
        <View className="absolute w-full px-4 bottom-4 flex-row justify-between items-center">
          <View></View>
          {isRecording ? (
            <TouchableOpacity onPress={stopRecording}>
              <Image source={IconStop} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              <Image source={IconStart} />
            </TouchableOpacity>
          )}

          {/* <TouchableOpacity onPress={pauseRecording}>
            <Text>Pause </Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={restartRecording}>
            <Image source={IconRefresh} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RecordBattle;

const styles = StyleSheet.create({
  cameraPreview: {
    flex: 1,
  },
});
