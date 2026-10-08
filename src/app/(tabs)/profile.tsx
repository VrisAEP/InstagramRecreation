import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PostGrid from "../../components/PostGrid";
import ProfileHeader from "../../components/ProfileHeader";
import { profile, profilePosts } from "../../data/profileData";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Ionicons name="add" size={32} color="#111111" />

        <View style={styles.usernameContainer}>
          <Ionicons name="lock-closed-outline" size={18} color="#111111" />

          <Text style={styles.username} numberOfLines={1}>
            {profile.username}
          </Text>

          <Ionicons name="chevron-down" size={18} color="#111111" />
        </View>

        <Text style={styles.threadsIcon}>@</Text>
        <Ionicons name="menu-outline" size={32} color="#111111" />
      </View>

      <PostGrid posts={profilePosts} header={<ProfileHeader />} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  usernameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  username: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
  },
  threadsIcon: {
    fontSize: 30,
    fontWeight: "600",
    color: "#111111",
  },
});
