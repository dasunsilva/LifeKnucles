import { View, Text } from "react-native";
import { Button, Divider } from "react-native-paper";
import { useRouter } from "expo-router";

export default function GetStartedAuth() {
  const router = useRouter();

  return (
    <View className="mt-6">
      <View className="flex-row space-x-4">
        <Button
          mode="contained"
          className="w-[150px] h-[55px]"
          contentStyle={{ height: "100%" }}
          buttonColor="#419A00"
          textColor="white"
          labelStyle={{ fontSize: 16, fontFamily: "Poppins-Bold" }}
          onPress={() => router.push("Login")}
        >
          Sign-in
        </Button>

        <Button
          mode="contained"
          className="w-[150px] h-[55px]"
          contentStyle={{ height: "100%" }}
          buttonColor="#419A00"
          textColor="white"
          labelStyle={{ fontSize: 16, fontFamily: "Poppins-Bold" }}
          onPress={() => console.log("Sign-up Button Pressed")}
        >
          Sign-up
        </Button>
      </View>

      <Text className="text-white text-center mt-4">or</Text>
      <Divider className="h-0.5 bg-white m-2" />

      <View className="flex-row space-x-4 justify-center mt-5">
        <Button
          mode="contained-tonal"
          icon="google"
          className="w-[140px] h-[55px]"
          contentStyle={{ height: "100%" }}
          labelStyle={{ fontSize: 17 }}
          onPress={() => console.log("Google Sign-in Button Pressed")}
          buttonColor="#2E8B57"
        >
          Google
        </Button>

        <Button
          mode="contained-tonal"
          icon="facebook"
          className="w-[140px] h-[55px]"
          contentStyle={{ height: "100%" }}
          labelStyle={{ fontSize: 17 }}
          onPress={() => console.log("Facebook Sign-in Button Pressed")}
          buttonColor="#1877F2"
        >
          Facebook
        </Button>
      </View>
    </View>
  );
}
