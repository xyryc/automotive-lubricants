import { Tabs } from "expo-router";
import {
  CircleUserRound,
  Handshake,
  ScanLine,
  Store,
  Wrench,
} from "lucide-react-native";

const iconSize = 20;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0F172A",
        tabBarInactiveTintColor: "#64748B",
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          borderTopColor: "#E2E8F0",
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="marketplace"
        options={{
          title: "Marketplace",
          tabBarIcon: ({ color }) => <Store size={iconSize} color={color} />,
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color }) => <Wrench size={iconSize} color={color} />,
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color }) => <ScanLine size={iconSize} color={color} />,
        }}
      />

      <Tabs.Screen
        name="roadside-assistance"
        options={{
          title: "Roadside assistance",
          tabBarIcon: ({ color }) => (
            <Handshake size={iconSize} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <CircleUserRound size={iconSize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
