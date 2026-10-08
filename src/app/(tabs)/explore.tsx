import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PostGrid from "../../components/PostGrid";
import { explorePosts } from "../../data/exploreData";

const categories = ["For you", "Gaming", "Fortnite", "Discover"];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={24} color="#666666" />

          <Text style={styles.searchText} numberOfLines={1}>
            Search with Meta AI
          </Text>
        </View>

        <Ionicons name="bookmark-outline" size={29} color="#111111" />
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          <View style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} color="#111111" />
          </View>

          {categories.map((category) => (
            <View
              key={category}
              style={[
                styles.category,
                category === "For you" && styles.selectedCategory,
              ]}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <PostGrid posts={explorePosts} showViews />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 14,
    gap: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f1f5",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 52,
    gap: 10,
  },
  searchText: {
    flex: 1,
    fontSize: 19,
    color: "#777777",
  },
  categories: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 10,
    alignItems: "center",
  },
  filterButton: {
    width: 46,
    height: 40,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    justifyContent: "center",
  },
  selectedCategory: {
    backgroundColor: "#f0f1f5",
    borderColor: "#f0f1f5",
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
  },
});
