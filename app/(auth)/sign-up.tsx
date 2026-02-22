import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RectangleEllipsis, User } from "lucide-react-native";
import ButtonPrimary from "../../components/ButtonPrimary";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!username.trim() || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    // TODO: hook with signup auth flow
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
                    autoCapitalize="none"
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
                    returnKeyType="next"
                  />
                </View>

                <View className="h-16 rounded-xl border border-[#6D7890] bg-secondary px-5 flex-row items-center">
                  <RectangleEllipsis size={20} />

                  <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor="#9AA3B2"
                    secureTextEntry
                    className="ml-3 flex-1 text-white text-xl font-semibold"
                    returnKeyType="done"
                  />
                </View>

                {error ? (
                  <Text className="text-red-400 text-sm -mt-2">{error}</Text>
                ) : null}

                <ButtonPrimary
                  title="Sign up"
                  className="mt-2"
                  onPress={handleSignUp}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
