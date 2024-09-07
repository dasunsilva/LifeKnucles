import AppHeader from "@/components/AppHeader";
import React from "react";
import { Text, View } from "react-native";

export default function LeaderBoard() {
  return (
    <>
      <AppHeader title="Status" />
      <View className="w-full flex justify-center items-center h-full bg-white">
        <Text className="text-3xl font-pblack"> textInComponent </Text>
        <Text>LeaderBoard</Text>
      </View>
    </>
  );
}
