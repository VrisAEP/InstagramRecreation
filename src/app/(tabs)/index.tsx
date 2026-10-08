import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PostCard from "../../components/PostCard";
import StoryItem from "../../components/StoryItem";
import { posts, stories } from "../../data/feedData";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Ionicons name="add" size={32} color="#111111" />

        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Instagram</Text>
          <Ionicons name="chevron-down" size={18} color="#111111" />
        </View>

        <Ionicons name="heart-outline" size={30} color="#111111" />
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.stories}
          >
            {stories.map((story) => (
              <StoryItem key={story.id} story={story} />
            ))}
          </ScrollView>
        }
      />
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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  logo: {
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: -1.5,
    color: "#111111",
  },
  stories: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 18,
  },
});
