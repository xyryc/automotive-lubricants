import { LinearGradient } from "expo-linear-gradient";
import {
  Bell,
  Bike,
  Car,
  Fuel,
  Grid2x2,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react-native";
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Categories from "@/components/Categories";

const categories = [
  { id: "cars", title: "Cars", icon: Car },
  { id: "bikes", title: "Bikes", icon: Bike },
  { id: "cng", title: "CNG", icon: Fuel },
  { id: "truck", title: "Truck &\nBuses", icon: Truck },
];

export default function MarketplaceScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      className="flex-1 bg-[#EDEDED]"
      edges={["left", "right", "bottom"]}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="stretch"
        style={{
          paddingHorizontal: 16,
          height: 140,
          backgroundColor: "#0F172A",
        }}
      >
        {/* profile and cart */}
        <View
          className="flex-row items-center justify-between"
          style={{
            paddingTop: insets.top + 14,
          }}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../../assets/icon.png")}
              style={{ width: 40, height: 40, borderRadius: 999 }}
              resizeMode="contain"
            />

            <Text className="ml-2 text-white text-base font-semibold">
              Hasan Mahmud
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <Bell size={22} color="#FFFFFF" />

            <View className="relative">
              <ShoppingCart size={22} color="#FFFFFF" />
              <View className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[#FF2F4B] items-center justify-center">
                <Text className="text-white text-[10px] font-bold">1</Text>
              </View>
            </View>

            <Grid2x2 size={22} color="#FFFFFF" />
          </View>
        </View>

        <View className="mt-7 h-14 rounded-xl bg-white px-4 flex-row items-center z-10">
          <Search size={20} color="#034A8F" />

          <Text className="ml-3 text-base font-normal text-[#ACACAC]">
            Search Products
          </Text>
        </View>
      </ImageBackground>

      <View className="bg-primary">
        <View className="mt-12 flex-row justify-between items-center py-2 px-5">
          <Text className="text-xl text-white font-semibold flex-1 pr-2">
            Unlock Peak Performance with the perfect Lubricant Oils
          </Text>

          <Image
            source={require("../../assets/elf.png")}
            style={{ width: 98, height: 64 }}
            resizeMode="contain"
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingVertical: 32,
          backgroundColor: "white",
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView horizontal className="px-5">
          <Categories />

          <Categories />

          <Categories />

          <Categories />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
