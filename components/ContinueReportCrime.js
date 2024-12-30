import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ContinueReportCrime = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSurnameChange = (text) => {
    setSurname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={handleNameChange}
      />

      <Text style={styles.label}>Surname</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Surname"
        value={surname}
        onChangeText={handleSurnameChange}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={handleEmailChange}
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Message"
        value={message}
        onChangeText={handleMessageChange}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="map-marker-alt" size={24} color="black" />
          <Text style={styles.bottomBarText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="bookmark" size={24} color="black" />
          <Text style={styles.bottomBarText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="bell" size={24} color="black" />
          <Text style={styles.bottomBarText}>Updates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "white",
  },
  bottomBarItem: {
    alignItems: "center",
  },
  bottomBarText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default ContinueReportCrime;
