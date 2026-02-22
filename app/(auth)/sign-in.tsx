import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Check,
  CircleQuestionMark,
  RectangleEllipsis,
  User,
} from "lucide-react-native";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useRouter } from "expo-router";

const SignInScreen = () => {
  const router = useRouter();

  const [username, setUsername] = useState("shl0145");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (!username.trim() || !password) {
      setError("Please enter username and password");
      return;
    }

    setError("");
    router.replace("/(tabs)/marketplace");
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="px-5 py-8">
              <View className="gap-6">
                <View className="h-16 rounded-xl border border-[#6D7890] bg-secondary px-5 flex-row items-center">
                  <User size={20} />

                  <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                    placeholderTextColor="#9AA3B2"
                    className="ml-3 flex-1 text-white text-xl font-semibold"
                    returnKeyType="next"
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
                    returnKeyType="done"
                  />
                </View>

                {error ? (
                  <Text className="text-red-400 text-sm -mt-2">{error}</Text>
                ) : null}

                <View className="flex-row items-center justify-between">
                  <TouchableOpacity
                    onPress={() => setRemember((p) => !p)}
                    className="flex-row items-center"
                    activeOpacity={0.8}
                  >
                    <View className="h-5 w-5 rounded items-center justify-center bg-secondary">
                      {remember ? <Check size={16} color="white" /> : null}
                    </View>
                    <Text className="ml-3 text-[#F0F3F9] text-xl font-bold">
                      Remember username
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <CircleQuestionMark size={18} color="white" />
                  </TouchableOpacity>
                </View>

                <ButtonPrimary
                  title="Sign in"
                  className="mt-8"
                  onPress={handleSignIn}
                />

                <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
                  <Text className="text-white text-center mt-4">Create account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
