import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type CategoriesProps = {
  name: string;
  image: ImageSourcePropType;
};

const Categories = ({ name, image }: CategoriesProps) => {
  return (
    <LinearGradient
      colors={["#EA0E2E", "#0562C3"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 8,
        padding: 1,
        marginRight: 8,
        width: 84,
      }}
    >
      <TouchableOpacity className="flex-1 rounded-lg bg-white px-2.5 py-2">
        <View className="w-16 h-16 items-center justify-center rounded-full bg-[#EDF6FF]">
          <Image
            source={image}
            style={{ width: 28, height: 28 }}
            resizeMode="contain"
          />
        </View>

        <Text
          className="text-xl font-semibold text-[#034A8F] text-center mt-1 mb-5"
          numberOfLines={2}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Categories;
