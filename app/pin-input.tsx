import PinInput from '@/components/PinInput';
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Alert, TextInput } from 'react-native';

const PinInputScreen = () => {
  const [pin, setPin] = useState<string[]>(['', '', '', '', '', '']);

  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handlePress = (value: string, index: number) => {
    if (pin[index] === '') {
      const updatedPin = [...pin];
      updatedPin[index] = value;
      setPin(updatedPin);

      if (index < pin.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  useEffect(() => {
    Alert.alert(
      'Touch ID for\n"CGS Application"',
      "เข้าใช้งานด้วย Touch ID หรือ\nยกเลิกเพื่อกลับไปใช้รหัส PIN",
      [
        {
          text: "Enter Password",
        },
        {
          text: "ยกเลิก",
        },
      ],
      { cancelable: false }
    );
  }, []);

  const handleDelete = () => {
    const lastIndex = pin.findIndex(p => p === '');
    const indexToDelete = lastIndex === -1 ? pin.length - 1 : lastIndex - 1;

    const updatedPin = [...pin];
    updatedPin[indexToDelete] = '';
    setPin(updatedPin);

    inputsRef.current[indexToDelete]?.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>กรุณากรอกรหัส PIN</Text>

      <PinInput
        pin={pin}
        setPin={setPin}
        handlePress={handlePress}
        handleDelete={handleDelete} 
        isFingerPrint={true} />
      <Text style={styles.title}>ลืมรหัส PIN </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#fff',
  },
  filledInput: {
    backgroundColor: '#000',
  },
  inputText: {
    color: '#fff',
    fontSize: 24,
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 180,
    marginBottom: 20,
  },
  keyButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  keyButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PinInputScreen;
