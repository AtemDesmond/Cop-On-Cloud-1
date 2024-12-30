import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleCancel = () => {
    // Handle cancel logic here
  };

  const handleResetPassword = () => {
    // Handle reset password logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={handleEmailChange}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // Dark background color
  },
  contentContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff", // White text color
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    color: "#fff", // White text color
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ForgotPassword;
