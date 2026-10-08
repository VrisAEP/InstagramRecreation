import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

import type { Story } from "../data/feedData";

type StoryItemProps = {
  story: Story;
};

export default function StoryItem({ story }: StoryItemProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.ring, story.isOwn && styles.ownRing]}>
        <Image source={{ uri: story.image }} style={styles.image} />

        {story.isOwn && (
          <View style={styles.addBadge}>
            <Ionicons name="add" size={22} color="#ffffff" />
          </View>
        )}
      </View>

      <Text style={styles.username} numberOfLines={1}>
        {story.username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 108,
    alignItems: "center",
    marginRight: 10,
  },
  ring: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#e6008d",
    padding: 4,
  },
  ownRing: {
    borderColor: "transparent",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  addBadge: {
    position: "absolute",
    right: -1,
    bottom: -1,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#111111",
    borderWidth: 3,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    marginTop: 6,
    fontSize: 13,
    color: "#111111",
  },
});
