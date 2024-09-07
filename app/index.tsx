import GetStartedAuth from "@/components/GetStartedAuth";
import GetStartedHeader from "@/components/GetStartedHeader";
import image from "@/constants/image";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={image.bgimage}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView>
        <View className="flex justify-between items-center px-4">
          <GetStartedHeader />
          <GetStartedAuth />
        </View>
<<<<<<< HEAD
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
=======
      </SafeAreaView>
    </ImageBackground>
>>>>>>> 40dbc777601d2583a960b9229ac617d7052477c7
  );
}
