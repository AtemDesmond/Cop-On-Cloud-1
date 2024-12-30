import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup"; // For validation schema

import HomeBackground from "../images/HomeBackground.jpg";

const ReportCrime = () => {
  // Validation schema for Formik
  const validationSchema = Yup.object().shape({
    input1: Yup.string().required("This field is required"),
    input2: Yup.string().required("This field is required"),
    input3: Yup.string().required("This field is required"),
    input4: Yup.string().required("This field is required"),
  });

  return (
    <ImageBackground
      source={HomeBackground} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Formik
          initialValues={{
            input1: "",
            input2: "",
            input3: "",
            input4: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form Values:", values);
            alert("Form submitted successfully!");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.container}>
              {/* Header */}
              <Text style={styles.title}>Report A Crime</Text>

              {/* Form Inputs */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Label</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Value"
                  onChangeText={handleChange("input1")}
                  onBlur={handleBlur("input1")}
                  value={values.input1}
                />
                {touched.input1 && errors.input1 && (
                  <Text style={styles.errorText}>{errors.input1}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Label</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Value"
                  onChangeText={handleChange("input2")}
                  onBlur={handleBlur("input2")}
                  value={values.input2}
                />
                {touched.input2 && errors.input2 && (
                  <Text style={styles.errorText}>{errors.input2}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Label</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Value"
                  onChangeText={handleChange("input3")}
                  onBlur={handleBlur("input3")}
                  value={values.input3}
                />
                {touched.input3 && errors.input3 && (
                  <Text style={styles.errorText}>{errors.input3}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Label</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Value"
                  onChangeText={handleChange("input4")}
                  onBlur={handleBlur("input4")}
                  value={values.input4}
                />
                {touched.input4 && errors.input4 && (
                  <Text style={styles.errorText}>{errors.input4}</Text>
                )}
              </View>

              {/* Navigation Buttons */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>

      {/* Bottom Tab Navigation Placeholder */}
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Text style={styles.tabText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tabText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tabText}>Updates</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#ff0000",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f8f8f8",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  tabText: {
    fontSize: 14,
    color: "#555",
  },
});

export default ReportCrime;
