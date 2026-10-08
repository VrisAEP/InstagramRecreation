import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

import { profile, profilePosts } from "../data/profileData";

type ProfileStatProps = {
  value: number;
  label: string;
};

function ProfileStat({ value, label }: ProfileStatProps) {
  return (
    <View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function ProfileHeader() {
  return (
    <View>
      <View style={styles.information}>
        <View style={styles.summary}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />

            <View style={styles.addBadge}>
              <Ionicons name="add" size={22} color="#ffffff" />
            </View>
          </View>

          <View style={styles.details}>
            <Text style={styles.name}>{profile.name}</Text>

            <View style={styles.stats}>
              <ProfileStat value={profilePosts.length} label="posts" />
              <ProfileStat value={profile.followers} label="followers" />
              <ProfileStat value={profile.following} label="following" />
            </View>
          </View>
        </View>

        <Text style={styles.bio}>{profile.bio}</Text>

        <View style={styles.badges}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>@ {profile.username}</Text>
          </View>

          <View style={styles.badge}>
            <Ionicons name="add" size={20} color="#777777" />
            <Text style={styles.addText}>Add</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>Share profile</Text>
          </View>

          <View style={styles.addPeople}>
            <Ionicons name="person-add-outline" size={22} color="#111111" />
          </View>
        </View>
      </View>

      <View style={styles.contentTabs}>
        <View style={styles.contentTab}>
          <Ionicons name="grid" size={27} color="#111111" />
          <View style={styles.activeLine} />
        </View>

        <View style={styles.contentTab}>
          <Ionicons name="play-circle-outline" size={29} color="#666666" />
        </View>

        <View style={styles.contentTab}>
          <Ionicons name="repeat-outline" size={30} color="#666666" />
        </View>

        <View style={styles.contentTab}>
          <Ionicons name="person-circle-outline" size={30} color="#666666" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  information: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatarContainer: {
    width: 96,
    height: 96,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 48,
  },
  addBadge: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#111111",
    borderWidth: 3,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 12,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111111",
  },
  statLabel: {
    fontSize: 13,
    color: "#111111",
    marginTop: 2,
  },
  bio: {
    fontSize: 16,
    lineHeight: 23,
    color: "#111111",
    marginTop: 18,
  },
  badges: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeText: {
    fontSize: 14,
    color: "#111111",
  },
  addText: {
    fontSize: 15,
    color: "#777777",
  },
  buttons: {
    flexDirection: "row",
    gap: 6,
    marginTop: 16,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    height: 38,
    borderRadius: 8,
    backgroundColor: "#f0f1f5",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
  },
  addPeople: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: "#f0f1f5",
    alignItems: "center",
    justifyContent: "center",
  },
  contentTabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  contentTab: {
    flex: 1,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  activeLine: {
    position: "absolute",
    bottom: 0,
    width: "55%",
    height: 2,
    backgroundColor: "#111111",
  },
});
