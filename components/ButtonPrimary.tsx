import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonPrimaryProps = {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
} & Pick<TouchableOpacityProps, "onPress" | "activeOpacity" | "testID">;

const ButtonPrimary = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  className = "",
  activeOpacity = 0.9,
  testID,
}: ButtonPrimaryProps) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={isDisabled}
      testID={testID}
      className={`rounded bg-[#F2F2F2] items-center justify-center py-5 ${
        isDisabled ? "opacity-60" : ""
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#111111" />
      ) : (
        <Text className="text-xl font-bold text-[#101010]">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
