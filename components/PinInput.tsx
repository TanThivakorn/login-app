import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PinInputProps {
  pin: string[];
  setPin: React.Dispatch<React.SetStateAction<string[]>>;
  handlePress: (value: string, index: number) => void;
  handleDelete: () => void;
  isFingerPrint: boolean;
}

const PinInput: React.FC<PinInputProps> = ({ pin, setPin, handlePress, handleDelete, isFingerPrint }) => {
  const inputsRef = useRef<(TextInput | null)[]>([]);

  return (
    <View>
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <View
            key={index}
            style={[styles.input, digit !== '' && styles.filledInput]}
          >
            {digit !== '' && <Text style={styles.inputText}>•</Text>}
          </View>
        ))}
      </View>

      <View style={styles.keypadContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.keyButton}
            onPress={() => handlePress(num.toString(), pin.findIndex((p) => p === ''))}
          >
            <Text style={styles.keyButtonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        {isFingerPrint ?
          <TouchableOpacity style={styles.emptyButton}>
            <Icon name="finger-print-outline" size={40} />
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.emptyButton}></TouchableOpacity>

        }
        <TouchableOpacity
          style={styles.keyButton}
          onPress={() => handlePress('0', pin.findIndex((p) => p === ''))}
        >
          <Text style={styles.keyButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.emptyButton}
          onPress={handleDelete}
        >
          <Icon name="backspace-outline" style={styles.deleteButtonText} />
        </TouchableOpacity>
      </View>
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
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    width: 21,
    height: 21,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  filledInput: {
    backgroundColor: 'grey',
  },
  inputText: {
    color: '#fff',
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 320,
    marginBottom: 20,
  },
  keyButton: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    marginVertical: 15,
    borderRadius: 55,
  },
  emptyButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    marginVertical: 15,
    borderRadius: 55,
  },
  keyButtonText: {
    fontSize: 28,
    color: 'grey',
  },
  deleteButtonText: {
    fontSize: 40,
    color: 'grey',
  },
});

export default PinInput;
