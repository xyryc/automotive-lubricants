import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, View } from "react-native";

const banners = [
  require("@/assets/banner1.png"),
  require("@/assets/banner2.jpg"),
];

const BANNER_WIDTH = 280;
const BANNER_HEIGHT = 148;
const GAP = 16;
const STEP = BANNER_WIDTH + GAP;

const loopBanners = [...banners, ...banners];

export default function Banner() {
  const translateX = useRef(new Animated.Value(0)).current;
  const currentIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slideNext = () => {
    const nextIndex = currentIndexRef.current + 1;

    Animated.timing(translateX, {
      toValue: -(nextIndex * STEP),
      duration: 2000,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      currentIndexRef.current = nextIndex;

      if (currentIndexRef.current >= banners.length) {
        currentIndexRef.current = 0;
        translateX.setValue(0);
      }
    });
  };

  useEffect(() => {
    timerRef.current = setInterval(slideNext, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <View style={{ overflow: "hidden", paddingHorizontal: 20 }}>
      <Animated.View
        style={{ flexDirection: "row", transform: [{ translateX }] }}
      >
        {loopBanners.map((src, i) => (
          <Image
            key={i}
            source={src}
            resizeMode="stretch"
            style={{
              width: BANNER_WIDTH,
              height: BANNER_HEIGHT,
              borderRadius: 8,
              marginRight: GAP,
            }}
          />
        ))}
      </Animated.View>
    </View>
  );
}
