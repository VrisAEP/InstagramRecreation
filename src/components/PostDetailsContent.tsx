import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

type PostDetailsContentProps = {
  image: string;
  username: string;
};

const comments = [
  {
    id: "1",
    username: "weekend.wander",
    text: "So cool!!",
  },
  {
    id: "2",
    username: "travel.notes",
    text: "What a great photo!",
  },
];

export default function PostDetailsContent({
  image,
  username,
}: PostDetailsContentProps) {
  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.actions}>
        <Ionicons name="heart" size={30} color="#ed174c" />
        <Text style={styles.count}>69</Text>

        <Ionicons name="chatbubble-outline" size={27} color="#111111" />
        <Text style={styles.count}>{comments.length}</Text>

        <Ionicons name="paper-plane-outline" size={29} color="#111111" />

        <Ionicons
          name="bookmark-outline"
          size={29}
          color="#111111"
          style={styles.bookmark}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>weekend.wander</Text> and{" "}
          <Text style={styles.bold}>others</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>{username} </Text>
          Absolutely incredible.
        </Text>

        {comments.map((comment) => (
          <View key={comment.id} style={styles.comment}>
            <Text style={[styles.text, styles.commentText]}>
              <Text style={styles.bold}>{comment.username} </Text>
              {comment.text}
            </Text>

            <Ionicons name="heart" size={16} color="#ed174c" />
          </View>
        ))}

        <Text style={styles.date}>April 24, 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    backgroundColor: "#eeeeee",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 10,
  },
  count: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111111",
  },
  bookmark: {
    marginLeft: "auto",
  },
  details: {
    paddingHorizontal: 14,
    paddingBottom: 24,
    gap: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 23,
    color: "#111111",
  },
  bold: {
    fontWeight: "600",
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  commentText: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: "#777777",
  },
});
