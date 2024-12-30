import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ReportCrime = () => {
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");
  const [values, setValues] = useState(["", "", "", ""]);

  const handleLabelChange = (text) => {
    setLabel(text);
  };

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleValueChange = (index, text) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);
  };

  const handleBackPress = () => {
    // Handle back navigation logic here
  };

  const handleNextPress = () => {
    // Handle next navigation logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Label</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Label"
        value={label}
        onChangeText={handleLabelChange}
      />

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={handleTitleChange}
      />

      {values.map((value, index) => (
        <View key={index} style={styles.valueContainer}>
          <Text style={styles.label}>Value</Text>
          <TextInput
            style={styles.input}
            placeholder={`Enter Value ${index + 1}`}
            value={value}
            onChangeText={(text) => handleValueChange(index, text)}
          />
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

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
  valueContainer: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
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

export default ReportCrime;
