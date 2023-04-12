return (
  <View className="flex-1 px-4 ">
    <>
      <Video
        source={Video2}
        ref={videoRef}
        onBuffer={onBuffer}
        onError={videoError}
        repeat
        volume={1}
        muted={false}
        resizeMode="cover"
        paused={false}
        className="flex-1  absolute top-0 bottom-0 right-0 left-0 "
      />

      {/* The following conainer is for Bottom Container */}
      <View className="flex-1    justify-end ">
        <View className="flex-[0.5] ">
          {/* For User profile and right Buttons */}
          <View className="flex flex-row justify-between ">
            {/* LeftSection */}
            <View className="self-end">
              {/* Username */}
              <View className="flex flex-row items-center gap-2">
                <View className="relative">
                  <View className=" h-6 w-6">
                    <Image
                      resizeMode="contain"
                      className="h-full w-full "
                      source={Creator}
                    />
                  </View>
                  <View className="absolute right-0">
                    <Image resizeMode="contain" source={IconCrown} />
                  </View>
                </View>
                <Text className="text-white font-bold text-base">
                  vandanaHart
                </Text>
              </View>
              {/* Music Name */}
              <View className="flex flex-row items-center gap-2 my-3">
                <View className="  w-6 items-center">
                  <Image resizeMode="contain" source={IconMusic} />
                </View>
                <Text
                  numberOfLines={1}
                  className="text-white font-normal text-sm">
                  Song Title error...
                </Text>
              </View>
              {/* Location */}
              <View className="flex flex-row items-center gap-2 mb-4">
                <View className="  w-6 items-center">
                  <Image resizeMode="contain" source={IconLocation} />
                </View>
                <Text
                  numberOfLines={1}
                  className="text-white font-normal text-md">
                  São José dos Campos
                </Text>
              </View>
              {/* Tags */}
              <View className="w-64 pl-1">
                <Text
                  numberOfLines={2}
                  className="text-white font-normal text-sm ">
                  These are some tags #ChaCha #Bachata #Energetic...
                </Text>
              </View>
            </View>
            {/* Right */}
            <View className=" gap-3">
              <TouchableOpacity>
                <Image source={IconHeart} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={IconBookmark} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={IconShare} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={IconInfo} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>

    <DanceHeader />
  </View>
);

return (
  <View className="flex-1 ">
    <DanceHeader />
    <ScrollView pagingEnabled>
      {Data.map((item, index) => (
        <View key={index} className="flex-1 h-screen">
          <Video
            source={item?.source}
            ref={videoRef}
            onBuffer={onBuffer}
            onError={videoError}
            repeat
            volume={1}
            muted={true}
            resizeMode="cover"
            paused={false}
            className="flex-1  absolute top-0 bottom-0 right-0 left-0 "
          />

          <View className="flex-1    justify-end ">
            <View className="flex-[0.5] ">
              {/* For User profile and right Buttons */}
              <View className="flex flex-row justify-between ">
                {/* LeftSection */}
                <View className="self-end">
                  {/* Username */}
                  <View className="flex flex-row items-center gap-2">
                    <View className="relative">
                      <View className=" h-6 w-6">
                        <Image
                          resizeMode="contain"
                          className="h-full w-full "
                          source={Creator}
                        />
                      </View>
                      <View className="absolute right-0">
                        <Image resizeMode="contain" source={IconCrown} />
                      </View>
                    </View>
                    <Text className="text-white font-bold text-base">
                      vandanaHart
                    </Text>
                  </View>
                  {/* Music Name */}
                  <View className="flex flex-row items-center gap-2 my-3">
                    <View className="  w-6 items-center">
                      <Image resizeMode="contain" source={IconMusic} />
                    </View>
                    <Text
                      numberOfLines={1}
                      className="text-white font-normal text-sm">
                      Song Title error...
                    </Text>
                  </View>
                  {/* Location */}
                  <View className="flex flex-row items-center gap-2 mb-4">
                    <View className="  w-6 items-center">
                      <Image resizeMode="contain" source={IconLocation} />
                    </View>
                    <Text
                      numberOfLines={1}
                      className="text-white font-normal text-md">
                      São José dos Campos
                    </Text>
                  </View>
                  {/* Tags */}
                  <View className="w-64 pl-1">
                    <Text
                      numberOfLines={2}
                      className="text-white font-normal text-sm ">
                      These are some tags #ChaCha #Bachata #Energetic...
                    </Text>
                  </View>
                </View>
                {/* Right */}
                <View className=" gap-3">
                  <TouchableOpacity>
                    <Image source={IconHeart} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={IconBookmark} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={IconShare} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={IconInfo} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);
