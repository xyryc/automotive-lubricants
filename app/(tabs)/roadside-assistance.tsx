import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function RoadsideAssistanceScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-semibold text-[#0F172A]">Roadside assistance</Text>
      </View>
    </SafeAreaView>
  );
}
