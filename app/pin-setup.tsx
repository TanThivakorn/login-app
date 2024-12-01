import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import PinInput from '@/components/PinInput';


const PinInputScreen = () => {
  const [pin, setPin] = useState<string[]>(['', '', '', '', '', '']);

  const router = useRouter();

  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handlePress = (value: string, index: number) => {
    if (pin[index] === '') {
      const updatedPin = [...pin];
      updatedPin[index] = value;
      setPin(updatedPin);

      if (index < pin.length - 1) {
        inputsRef.current[index + 1]?.focus();
      } else if (index === pin.length - 1) {
        router.push('/confirm-pin'); 
      }
    }
  };

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
      <Text style={styles.title}>ตั้งรหัส PIN CODE</Text>
      <PinInput
        pin={pin}
        setPin={setPin}
        handlePress={handlePress}
        handleDelete={handleDelete} isFingerPrint={false}      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 0,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
  },
  
});

export default PinInputScreen;
