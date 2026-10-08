import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import type { ReactElement } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import type { GridPost } from "../data/exploreData";

type PostGridProps = {
  posts: GridPost[];
  showViews?: boolean;
  header?: ReactElement;
};

export default function PostGrid({
  posts,
  showViews = false,
  header,
}: PostGridProps) {
  return (
    <FlatList
      style={styles.grid}
      data={posts}
      numColumns={3}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={header}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Link
          href={{
            pathname: "/post",
            params: { id: item.id },
          }}
          push
          asChild
        >
          <Pressable
            style={styles.tile}
            accessibilityLabel={`Open post ${index + 1}`}
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            {showViews && (
              <View style={styles.views}>
                <Ionicons name="play-outline" size={16} color="#ffffff" />
                <Text style={styles.viewCount}>{item.views}</Text>
              </View>
            )}
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
  tile: {
    width: "33.333333%",
    aspectRatio: 0.74,
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#eeeeee",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  views: {
    position: "absolute",
    left: 6,
    bottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  viewCount: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    textShadowColor: "#333333",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
