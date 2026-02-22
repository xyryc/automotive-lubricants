import "./global.css";
import { Stack } from "expo-router";
import DropdownAlert from "react-native-dropdownalert";
import { setAlertRef } from "@/lib/alert";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

export default function RootLayout() {
  const hydrate = useAuthStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <DropdownAlert ref={(ref) => setAlertRef(ref)} />
    </>
  );
}
