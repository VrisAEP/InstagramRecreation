import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: "#ffffff",
        },
      }}
      tabBar={({ state, navigation, insets }) => {
        const currentScreen = state.routes[state.index].name;

        return (
          <View
            style={[
              styles.tabBar,
              {
                paddingBottom: Math.max(insets.bottom, 8),
                paddingLeft: insets.left,
                paddingRight: insets.right,
              },
            ]}
          >
            <Pressable
              style={styles.tab}
              onPress={() => navigation.navigate("index")}
              accessibilityRole="button"
              accessibilityLabel="Home"
              accessibilityState={{ selected: currentScreen === "index" }}
            >
              <Ionicons
                name={currentScreen === "index" ? "home" : "home-outline"}
                size={28}
                color="#111111"
              />
            </Pressable>

            <View style={styles.tab}>
              <Ionicons name="play-circle-outline" size={30} color="#111111" />
            </View>

            <View style={styles.tab}>
              <View>
                <Ionicons
                  name="paper-plane-outline"
                  size={28}
                  color="#111111"
                />
                <View style={styles.notificationDot} />
              </View>
            </View>

            <Pressable
              style={styles.tab}
              onPress={() => navigation.navigate("explore")}
              accessibilityRole="button"
              accessibilityLabel="Explore"
              accessibilityState={{ selected: currentScreen === "explore" }}
            >
              <Ionicons name="search-outline" size={30} color="#111111" />
            </Pressable>

            <Pressable
              style={styles.tab}
              onPress={() => navigation.navigate("profile")}
              accessibilityRole="button"
              accessibilityLabel="Profile"
              accessibilityState={{ selected: currentScreen === "profile" }}
            >
              <Ionicons
                name={
                  currentScreen === "profile"
                    ? "person-circle"
                    : "person-circle-outline"
                }
                size={32}
                color="#111111"
              />
            </Pressable>
          </View>
        );
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationDot: {
    position: "absolute",
    bottom: -2,
    right: -4,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#ff1744",
  },
});
