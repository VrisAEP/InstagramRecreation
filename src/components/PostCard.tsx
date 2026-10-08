import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

import type { Post } from "../data/feedData";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />

        <Text style={styles.username}>{post.username}</Text>

        <Ionicons
          name="ellipsis-horizontal"
          size={24}
          color="#111111"
          style={styles.moreIcon}
        />
      </View>

      <Image source={{ uri: post.image }} style={styles.postImage} />

      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={29} color="#111111" />

        <Ionicons name="chatbubble-outline" size={26} color="#111111" />

        <Ionicons name="paper-plane-outline" size={27} color="#111111" />

        <View style={styles.saveIcon}>
          <Ionicons name="bookmark-outline" size={27} color="#111111" />
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.likes}>{post.likes} likes</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username} </Text>
          {post.caption}
        </Text>

        <Text style={styles.comments}>
          View all {post.commentCount} comments
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
    color: "#111111",
  },
  moreIcon: {
    marginLeft: "auto",
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    backgroundColor: "#eeeeee",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 16,
  },
  saveIcon: {
    marginLeft: "auto",
  },
  details: {
    paddingHorizontal: 12,
    gap: 6,
  },
  likes: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
    color: "#111111",
  },
  comments: {
    fontSize: 14,
    color: "#777777",
  },
});
