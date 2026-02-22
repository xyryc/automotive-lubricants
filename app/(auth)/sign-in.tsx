import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Check, CircleQuestionMark, RectangleEllipsis, Square, SquareCheck, User } from "lucide-react-native";

const DarkSignInScreen = () => {
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

          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => setRemember((p) => !p)}
              className="flex-row items-center"
              activeOpacity={0.8}
            >
              <View
                className="h-5 w-5 rounded items-center justify-center bg-secondary"
              >
                {remember ?   <Check size={16} color="white" /> : null}
              </View>
              <Text className="ml-3 text-[#F0F3F9] text-xl font-bold">
                Remember username
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <CircleQuestionMark size={18} color="white"/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            className="mt-12 rounded bg-[#F2F2F2] items-center justify-center"
          >
            <Text className="text-xl font-bold py-5">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DarkSignInScreen;
