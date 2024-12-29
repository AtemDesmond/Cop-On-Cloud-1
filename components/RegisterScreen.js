import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  CheckBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function RegisterScreen() {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <LinearGradient
      colors={['#4c004c', '#800080', '#ff00ff']}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4c004c" />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Value" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Value"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <View>
            <Text style={styles.checkboxLabel}>Label</Text>
            <Text style={styles.checkboxDescription}>Description</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  checkboxDescription: {
    fontSize: 12,
    color: '#777',
  },
  button: {
    backgroundColor: '#800080',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
