import { Tabs } from "expo-router";
import {
  CircleUserRound,
  Handshake,
  ScanLine,
  Store,
  Wrench,
} from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0F4B90",
        tabBarInactiveTintColor: "#3F3F46",
        tabBarStyle: {
          height: 88,
          paddingTop: 12,
          paddingBottom: 22,
          borderTopColor: "#fff",
          backgroundColor: "#F0F7FF",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: "absolute",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="marketplace"
        options={{
          title: "Marketplace",
          tabBarIcon: ({ color }) => <Store size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color }) => <Wrench size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarLabel: () => null,
          tabBarButton: (props: any) => (
            <TouchableOpacity
              onPress={props.onPress}
              onLongPress={props.onLongPress}
              accessibilityRole={props.accessibilityRole}
              accessibilityState={props.accessibilityState}
              accessibilityLabel={props.accessibilityLabel}
              testID={props.testID}
              activeOpacity={0.9}
              style={{
                top: -24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: 42,
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LinearGradient
                  colors={["#EA0E2E", "#7E2E8E", "#0562C3"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 36,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ScanLine size={28} color="#FFFFFF" />
                </LinearGradient>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="roadside-assistance"
        options={{
          title: "Roadside assistance",
          tabBarIcon: ({ color }) => <Handshake size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <CircleUserRound size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
