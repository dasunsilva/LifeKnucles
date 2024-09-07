import image from "@/constants/image";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-primary">
      <View className="w-full flex justify-center items-center h-full px-4">
        <View className="w-full justify-center items-center">
          <View className="w-[130px] h-[130px] bg-white rounded-full items-center justify-center">
            <Image
              source={image.logobg}
              className="w-[120px] h-[120px] rounded-full"
              resizeMode="contain"
            />
          </View>
          <Text className="text-4xl font-pblack pt-5">
            <Text className="text-forestgreen-100">LIFE</Text>
            <Text className="text-secondary-200"> Knuckles</Text>
          </Text>
          <Image
            source={image.path}
            className="w-[300px] h-[30px]"
            resizeMode="contain"
          />
          <Text className="text-white font-plight pt-4">
            Protecting the Knuckles, Together
          </Text>
        </View>
        <Divider className="w-2/3 h-1 bg-white m-8" />
        <View className=" justify-center items-center">
          <Divider
            theme={{ colors: { primary: "green" } }}
            className="pb-1 mb-5 w-full"
          />

          <TouchableOpacity className="w-[300px] h-[55px] mb-4">
            <Button
              mode="contained"
              className="w-full h-full justify-center"
              contentStyle={{ height: "100%" }}
              onPress={() => router.push("/WildFireAlert")}
            >
              Sign-in
            </Button>
          </TouchableOpacity>

          <Text className="text-white mb-4">or</Text>

          <TouchableOpacity className="w-[300px] h-[55px]">
            <Button
              mode="contained"
              className="w-full h-full justify-center"
              contentStyle={{ height: "100%" }}
              onPress={() => console.log("Sign-up Button Pressed")}
            >
              Sign-up
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
