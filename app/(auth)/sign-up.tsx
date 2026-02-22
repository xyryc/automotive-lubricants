import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { RectangleEllipsis, User } from "lucide-react-native";
import ButtonPrimary from "../../components/ButtonPrimary";

const SignUpScreen = () => {
  const [username, setUsername] = useState("shl0145");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 px-5 justify-center">
        <View className="gap-6">
          <View className="h-16 rounded-xl border border-[#6D7890] bg-secondary px-5 flex-row items-center">
            <User size={20} />

            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="#9AA3B2"
              className="ml-3 flex-1 text-white text-xl font-semibold"
            />
          </View>

          <View className="h-16 rounded-xl border border-[#6D7890] bg-secondary px-5 flex-row items-center">
            <RectangleEllipsis size={20} />

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#9AA3B2"
              secureTextEntry
              className="ml-3 flex-1 text-white text-xl font-semibold"
            />
          </View>

          <ButtonPrimary title="Sign up" className="mt-8" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
