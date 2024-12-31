import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ' firebase/auth';
import {useAuthState} from 'react-firebase-hooks';
import {useCollectionData} from 'react-firebase-hooks/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnKqkqrw8uySYHKKzptQUDILXsfrQZ4fI",
  authDomain: "cloud-cop-1.firebaseapp.com",
  projectId: "cloud-cop-1",
  storageBucket: "cloud-cop-1.firebasestorage.app",
  messagingSenderId: "773093429951",
  appId: "1:773093429951:web:9d1218802826a7cb686c0a"
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
