import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PostDetailsContent from "../components/PostDetailsContent";
import { explorePosts } from "../data/exploreData";
import { profile, profilePosts } from "../data/profileData";

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const allPosts = [...explorePosts, ...profilePosts];
  const post = allPosts.find((item) => item.id === id);

  const isProfilePost = profilePosts.some((item) => item.id === id);
  const username = isProfilePost ? profile.username : "daily.outdoors";

  function goBack() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={goBack}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={30} color="#111111" />
        </Pressable>

        <View style={styles.heading}>
          <Text style={styles.title}>Posts</Text>
          {post && <Text style={styles.username}>{username}</Text>}
        </View>

        <View style={styles.headerSpacer} />
      </View>

      {post ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <PostDetailsContent image={post.image} username={username} />
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Text>Post not found. Use the back arrow to return.</Text>
        </View>
      )}
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
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
  },
  username: {
    fontSize: 15,
    color: "#111111",
    marginTop: 2,
  },
  headerSpacer: {
    width: 44,
  },
  emptyState: {
    padding: 20,
  },
});
