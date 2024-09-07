import image from "@/constants/image";
import React from "react";
import { Text, View, Image } from "react-native";
import { Avatar } from "react-native-paper";

export default function GetStartedHeader() {
  return (
    <View className="w-full justify-center items-center flex m-12">
      {/* <View className="w-[130px] h-[130px] bg-white rounded-full items-center justify-center mb-12"> */}
      {/* <Image
          source={image.logobg}
          className="w-[120px] h-[120px] rounded-full mb-2 "
          resizeMode="contain"
        /> */}
      {/* </View> */}
      <Avatar.Image
        size={130}
        source={image.logobg}
        className="bg-white mb-12"
      />
      <View>
        <Text className="text-4xl font-marker">
          <Text
            className="text-primary"
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            LIFE
          </Text>
          <Text
            className="text-secondary-200"
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            {" "}
            Knuckles
          </Text>
        </Text>
      </View>
      <Image
        source={image.path}
        className="w-[300px] h-[30px]"
        resizeMode="contain"
      />
      <Text className="text-white font-plight m-8">
        Protecting the Knuckles, Together
      </Text>
      <Text
        className="text-white font-psemibold text-3xl mt-5"
        style={{
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
        }}
      >
        WildFire Alert System
      </Text>
    </View>
  );
}
