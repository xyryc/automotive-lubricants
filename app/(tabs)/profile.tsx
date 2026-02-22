import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ButtonPrimary from "@/components/ButtonPrimary";
import { showAlert } from "@/lib/alert";
import { useAuthStore } from "@/stores/authStore";

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const session = useAuthStore((s) => s.session);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = async () => {
    await logout();
    showAlert("info", "Logged out");
    router.replace("/(auth)/sign-in");
  };

  const username = session?.username || "Guest";

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={["left", "right", "bottom"]}
    >
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="stretch"
        style={{
          paddingHorizontal: 16,
          height: 140,
          backgroundColor: "#0F172A",
        }}
      >
        <View
          className="justify-end h-full"
          style={{
            paddingTop: insets.top + 14,
            paddingBottom: 16,
          }}
        >
          <Text className="text-2xl font-bold text-white">Profile</Text>
          <Text className="mt-1 text-white/80">
            Manage your account details
          </Text>
        </View>
      </ImageBackground>

      <View className="flex-1 px-5 py-20 bg-primary">
        <View className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-5">
          <View className="h-14 w-14 rounded-full bg-[#0F172A] items-center justify-center">
            <Image
              source={require("@/assets/user.png")}
              style={{ width: 40, height: 40, borderRadius: 999 }}
              resizeMode="contain"
            />
          </View>

          <Text className="mt-4 text-sm text-[#64748B]">Signed in as</Text>
          <Text className="mt-1 text-xl font-semibold text-[#0F172A]">
            {username}
          </Text>

          <ButtonPrimary
            title="Logout"
            onPress={handleLogout}
            className="mt-6"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
