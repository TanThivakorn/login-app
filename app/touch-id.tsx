import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';


const TouchId = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Touch ID</Text>
        <Text style={styles.subTitle}>ตั้งค่าล็อคอินด้วยลายนิ้วมือ</Text>
        <Text style={styles.subTitle}>เพื่อการเข้าถึงที่เร็วขึ้น</Text>
      </View>
      <View style={styles.fingerPrint}>
        <View style={styles.fingerPrintContainer}>
          <Icon name="finger-print-outline" size={60} />

        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>ตั้งค่าลายนิ้วมือ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => router.push('/pin-input')}
        >
          <Text style={styles.skipButtonText}>ข้าม</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginTop: 87
  },
  fingerPrintContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    borderRadius: 50,
    elevation: 10
  },
  fingerPrint: {
    alignItems: 'center',
    marginTop: 120
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 15,
  },
  button: {
    backgroundColor: '#FF6347',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 28
  },
  skipButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 35
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  skipButtonText: {
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 195
  }
});

export default TouchId;
