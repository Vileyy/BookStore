import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const BookDetailLayout = ({ route, navigation }) => {
  // Nếu có truyền book qua route params thì lấy, không thì dùng mẫu
  const book = route?.params?.book || {
    title: "Other Words For Home",
    author: "Jasmine Warga",
    image: "https://covers.openlibrary.org/b/id/10594763-L.jpg",
    rating: 4.5,
    pages: 341,
    language: "Eng",
    description:
      "Jude never thought she'd be leaving her beloved older brother and father behind, all the way",
  };

  return (
    <View style={styles.container}>
      {/* Header với nút back và tiêu đề */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation && navigation.goBack()}
          style={styles.backBtn}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Detail</Text>
        <View style={{ width: 32 }} />
      </View>
      {/* Ảnh bìa nhỏ phía trên */}
      <View style={styles.coverWrapper}>
        <Image source={{ uri: book.image }} style={styles.bookImage} />
      </View>
      {/* Tiêu đề và tác giả */}
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
      {/* Khối thông tin */}
      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>{book.rating}</Text>
          <Text style={styles.infoLabel}>Rating</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>{book.pages}</Text>
          <Text style={styles.infoLabel}>Number of Page</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>{book.language}</Text>
          <Text style={styles.infoLabel}>Language</Text>
        </View>
      </View>
      {/* Mô tả */}
      <View style={styles.descSection}>
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.descText}>{book.description}</Text>
      </View>
      {/* Bookmark + Start Reading */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.bookmarkBtn}>
          <Text style={{ color: "#fff", fontSize: 22 }}>☆</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readBtn}>
          <Text style={styles.readBtnText}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#181A20", paddingHorizontal: 20 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 8,
  },
  backBtn: { padding: 4, width: 32 },
  backText: { color: "#fff", fontSize: 24 },
  headerTitle: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  coverWrapper: { alignItems: "center", marginTop: 8, marginBottom: 8 },
  bookImage: { width: 90, height: 110, borderRadius: 10 },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  },
  author: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: "#23252B",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: "center",
    marginHorizontal: 8,
    minWidth: 80,
  },
  infoValue: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  infoLabel: { color: "#aaa", fontSize: 12, textAlign: "center" },
  descSection: {
    backgroundColor: "#23252B",
    borderRadius: 10,
    marginVertical: 10,
    padding: 16,
  },
  descTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  descText: { color: "#aaa", fontSize: 14 },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 24,
  },
  bookmarkBtn: {
    backgroundColor: "#23252B",
    borderRadius: 12,
    padding: 14,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  readBtn: {
    backgroundColor: "#FF6E4E",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  readBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default BookDetailLayout;
