import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ChevronRight } from "lucide-react-native";

type ProductCardProps = {
  name: string;
  image: ImageSourcePropType;
};

const ProductCard = ({ name, image }: ProductCardProps) => {
  return (
    <TouchableOpacity className="bg-[#EDF6FF] p-1.5 rounded-lg">
      <View className="w-[100px] h-[100px] bg-white rounded-lg">
        <Image
          source={image}
          style={{ width: "100%", height: "100%", borderRadius: 8 }}
          resizeMode="contain"
        />
      </View>

      <View className="mt-3 flex-row items-end justify-center w-[100px]">
        <Text
          className="text-base font-semibold text-[#3B3B3B] flex-1"
          numberOfLines={2}
        >
          {name}
        </Text>

        <ChevronRight size={16} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
