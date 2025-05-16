import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const books = [
  {
    id: "1",
    title: "Other Words For Home",
    author: "Jasmine Warga",
    image: "https://covers.openlibrary.org/b/id/10594763-L.jpg",
    timeLeft: "3d 5h",
    percent: 75,
  },
  {
    id: "2",
    title: "Metropolis",
    author: "Philip Kerr",
    image: "https://covers.openlibrary.org/b/id/10594764-L.jpg",
    timeLeft: "10d 5h",
    percent: 23,
  },
];

const icons = {
  claim: "🎁",
  getPoint: "💰",
  myCard: "💳",
};

const BookListLayout = ({ navigation }) => {
  const renderBook = ({ item }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() =>
        navigation && navigation.navigate("BookDetail", { book: item })
      }
      activeOpacity={0.85}
    >
      <View style={styles.bookImageWrapper}>
        <Image source={{ uri: item.image }} style={styles.bookImage} />
        <View style={styles.bookOverlay}>
          <View style={styles.metaOverlayItem}>
            <Text style={styles.metaOverlayIcon}>⏰</Text>
            <Text style={styles.metaOverlayText}>{item.timeLeft}</Text>
          </View>
          <View style={styles.metaOverlayItem}>
            <Text style={styles.metaOverlayIcon}>★</Text>
            <Text style={styles.metaOverlayText}>{item.percent}%</Text>
          </View>
        </View>
      </View>
      <Text style={styles.bookTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.bookAuthor} numberOfLines={1}>
        {item.author}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.username}>Username</Text>
        </View>
        <View style={styles.pointBox}>
          <Text style={styles.pointText}>+ 200 point</Text>
        </View>
      </View>
      <View style={styles.actionBox}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>{icons.claim}</Text>
          <Text style={styles.actionText}>Claim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>{icons.getPoint}</Text>
          <Text style={styles.actionText}>Get Point</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>{icons.myCard}</Text>
          <Text style={styles.actionText}>My Card</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.bookList}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.tabRow}>
        <Text style={[styles.tab, styles.tabActive]}>Best Seller</Text>
        <Text style={styles.tab}>The Latest</Text>
        <Text style={styles.tab}>Coming Soon</Text>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomIcon}>
          <Text style={styles.bottomIconText}>▦</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon}>
          <Text style={styles.bottomIconText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon}>
          <Text style={styles.bottomIconText}>📚</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon}>
          <Text style={styles.bottomIconText}>☰</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#181A20", paddingTop: 24 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  greeting: { color: "#fff", fontSize: 15, opacity: 0.7 },
  username: { color: "#fff", fontWeight: "bold", fontSize: 22, marginTop: 2 },
  pointBox: {
    backgroundColor: "#FF6E4E",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
    shadowColor: "#FF6E4E",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  pointText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  actionBox: {
    backgroundColor: "#23252B",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 18,
    padding: 14,
  },
  actionBtn: {
    backgroundColor: "#23252B",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 2,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  actionIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  bookList: {
    marginLeft: 20,
    marginBottom: 10,
  },
  bookCard: {
    backgroundColor: "#23252B",
    borderRadius: 18,
    marginRight: 18,
    width: 150,
    height: 260,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  bookImageWrapper: {
    width: 120,
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 10,
    position: "relative",
    backgroundColor: "#181A20",
  },
  bookImage: { width: "100%", height: "100%", borderRadius: 12 },
  bookOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(24,26,32,0.7)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  metaOverlayItem: { flexDirection: "row", alignItems: "center" },
  metaOverlayIcon: { color: "#FF6E4E", fontSize: 14, marginRight: 2 },
  metaOverlayText: { color: "#fff", fontSize: 13, marginRight: 8 },
  bookTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
    textAlign: "center",
  },
  bookAuthor: {
    color: "#aaa",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 2,
  },
  tabRow: {
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 20,
    marginBottom: 12,
  },
  tab: { color: "#aaa", marginRight: 22, fontSize: 16, fontWeight: "500" },
  tabActive: {
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#181A20",
    borderTopWidth: 1,
    borderTopColor: "#23252B",
    paddingVertical: 10,
    paddingHorizontal: 32,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomIcon: { alignItems: "center", flex: 1 },
  bottomIconText: { color: "#fff", fontSize: 28 },
});

export default BookListLayout;
