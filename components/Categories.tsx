import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Categories = () => {
  return (
    <LinearGradient
      colors={["#EA0E2E", "#0562C3"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 8,
        padding: 1,
        marginRight: 8,
      }}
    >
      <View
        style={{
          borderRadius: 6,
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <View className="w-16 h-16 items-center justify-center rounded-full bg-[#EDF6FF]">
          <Image
            source={require("../assets/car.png")}
            style={{
              width: 28,
              height: 28,
            }}
            resizeMode="contain"
          />
        </View>

        <Text className="text-xl font-semibold text-[#034A8F] text-center mt-1 mb-5">
          Car
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Categories;
