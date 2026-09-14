import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useRouter, Link } from "expo-router";
import api, { saveToken } from "@/api/client";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) return Alert.alert("Missing fields", "Fill in all fields.");
    setLoading(true);
    try {
      const res = await api.post("/auth/register", { name, email, password });
      if (res.data.token) {
        await saveToken(res.data.token);
        router.replace("/profile");
      } else {
        Alert.alert("Success", "Account created. Please log in.");
        router.replace("/login");
      }
    } catch (err: any) {
      Alert.alert("Registration Error", err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join Interview Friend</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
      </TouchableOpacity>
      <Link href="/login" style={styles.link}>Already have an account? Log In</Link>
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
