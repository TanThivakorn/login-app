import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/AntDesign';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleBack}>
      <Icon name="arrowleft" size={25} />
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default BackButton;
