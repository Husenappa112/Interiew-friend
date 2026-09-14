import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useRouter, Link } from "expo-router";
import api, { saveToken } from "@/api/client";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return Alert.alert("Missing fields", "Enter email and password.");
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      await saveToken(res.data.token);
      router.replace("/profile");
    } catch (err: any) {
      Alert.alert("Login Error", err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interview Friend</Text>
      <Text style={styles.subtitle}>Log in to continue</Text>
      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Log In</Text>}
      </TouchableOpacity>
      <Link href="/register" style={styles.link}>Don't have an account? Register</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#0d1117" },
  title: { fontSize: 32, fontWeight: "800", color: "#fff", marginBottom: 4 },
  subtitle: { fontSize: 16, color: "#8b949e", marginBottom: 32 },
  input: { backgroundColor: "#161b22", borderWidth: 1, borderColor: "#30363d", borderRadius: 8, padding: 14, color: "#fff", marginBottom: 14 },
  button: { backgroundColor: "#58a6ff", borderRadius: 8, padding: 16, alignItems: "center", marginTop: 8 },
  buttonText: { color: "#0d1117", fontWeight: "700", fontSize: 16 },
  link: { color: "#58a6ff", textAlign: "center", marginTop: 20 },
});
