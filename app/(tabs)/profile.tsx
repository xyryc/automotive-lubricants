import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "expo-router";
import { showAlert } from "@/lib/alert";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function ProfileScreen() {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = async () => {
    await logout();
    showAlert("info", "Logged out");
    router.replace("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-semibold text-[#0F172A]">Profile</Text>

        <ButtonPrimary onPress={handleLogout} title="Logout" />
      </View>
    </SafeAreaView>
  );
}
