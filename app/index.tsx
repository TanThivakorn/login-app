import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import RowSpacer from '@/components/RowSpacer';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>ยินดีต้อนรับ</Text>
        <Text style={styles.subTitle}>กรุณาเลือกภาษา</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <RowSpacer size={30} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/term-of-service')}
        >
          <Text style={styles.buttonText}>ไทย</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'white'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 19,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    width: '100%', 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, 
    fontWeight: 'bold',
  },
});

export default Home;
