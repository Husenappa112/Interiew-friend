import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import api, { clearToken } from "@/api/client";

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/users/profile")
      .then((res) => setUser(res.data.user))
      .catch(() => {
        Alert.alert("Session expired", "Please log in again.");
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await clearToken();
    router.replace("/login");
  };

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#58a6ff" /></View>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back{user?.name ? `, ${user.name}` : ""} 👋</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email || "-"}</Text>
        <Text style={styles.label}>Role</Text>
        <Text style={styles.value}>{user?.role || "-"}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#0d1117" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0d1117" },
  title: { fontSize: 24, fontWeight: "800", color: "#fff", marginTop: 60, marginBottom: 24 },
  card: { backgroundColor: "#161b22", borderWidth: 1, borderColor: "#30363d", borderRadius: 12, padding: 20 },
  label: { color: "#8b949e", fontSize: 13, marginTop: 12 },
  value: { color: "#fff", fontSize: 16, fontWeight: "600" },
  button: { backgroundColor: "#ff7b72", borderRadius: 8, padding: 16, alignItems: "center", marginTop: 32 },
  buttonText: { color: "#0d1117", fontWeight: "700", fontSize: 16 },
});
