import {
  Bell,
  BellDot,
  Grid2x2,
  Search,
  ShoppingCart,
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
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import { useAuthStore } from "@/stores/authStore";

const categoryData = [
  { id: "car", name: "Car", image: require("@/assets/car.png") },
  { id: "bike", name: "Bike", image: require("@/assets/bike.png") },
  { id: "cng", name: "CNG", image: require("@/assets/cng.png") },
  { id: "truck", name: "Truck & Buses", image: require("@/assets/bus.png") },
];

const productData = [
  {
    id: "1",
    name: "PIAA Air Filter PT108",
    image: require("@/assets/product1.png"),
  },
  {
    id: "2",
    name: "PIAA Oil Filter Z8M",
    image: require("@/assets/product2.png"),
  },
  {
    id: "3",
    name: "PIAA Air Filter PT83",
    image: require("@/assets/product3.png"),
  },
  {
    id: "4",
    name: "PIAA Air Filter PT108",
    image: require("@/assets/product1.png"),
  },
  {
    id: "5",
    name: "PIAA Oil Filter Z8M",
    image: require("@/assets/product2.png"),
  },
  {
    id: "6",
    name: "PIAA Air Filter PT83",
    image: require("@/assets/product3.png"),
  },
];

export default function MarketplaceScreen() {
  const insets = useSafeAreaInsets();

  const session = useAuthStore((s) => s.session);
  const username = session?.username || "Guest";

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

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
          backgroundColor: "white",
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require("@/assets/background.png")}
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
                source={require("@/assets/user.png")}
                style={{ width: 40, height: 40, borderRadius: 999 }}
                resizeMode="contain"
              />

              <Text className="ml-2 text-white text-base font-semibold">
                {username}
              </Text>
            </View>

            <View className="flex-row items-center gap-3">
              <BellDot size={22} color="#FFFFFF" />

              <View className="relative">
                <ShoppingCart size={22} color="#FFFFFF" />
                <View className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[#FF2F4B] items-center justify-center">
                  <Text className="text-white text-[10px] font-bold">1</Text>
                </View>
              </View>

              <Image
                source={require("@/assets/square.png")}
                style={{
                  width: 24,
                  height: 24,
                }}
                resizeMode="contain"
              />
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

        {/* categories */}
        <ScrollView horizontal className="px-5 h-36 mt-8">
          {categoryData.map((item) => (
            <Categories key={item.id} name={item.name} image={item.image} />
          ))}
        </ScrollView>

        {/* what's new banners */}
        <Text className="text-2xl font-bold text-[#3B3B3B] px-5 mt-8 mb-4">
          What's New
        </Text>

        <Banner />

        {/* featured products */}
        <Text className="text-2xl font-bold text-[#3B3B3B] px-5 mt-8 mb-4">
          Featured Products
        </Text>

        <View className="px-5 flex-row flex-wrap justify-between gap-3">
          {productData.map((item) => (
            <ProductCard key={item.id} name={item.name} image={item.image} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
