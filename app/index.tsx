import { Redirect } from "expo-router";
import { useAuthStore } from "@/stores/authStore";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const { hydrated, session } = useAuthStore();

  if (!hydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (session) return <Redirect href="/(tabs)/marketplace" />;
  return <Redirect href="/(auth)/sign-in" />;
}
