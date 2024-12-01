import BackButton from '@/components/BackButton';
import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useRouter, Link } from 'expo-router';

const PinInput = () => {
    const pinLength = 6;
    const [pin, setPin] = useState<string[]>(Array(pinLength).fill(''));
    const inputsRef = useRef<TextInput[]>([]);

    const [timeLeft, setTimeLeft] = useState<number>(60);
    const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        
        if (timeLeft === 0) {
            setIsTimeUp(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleChange = (value: string, index: number) => {
        if (/^\d$/.test(value) || value === '') {
            const updatedPin = [...pin];
            updatedPin[index] = value;
            setPin(updatedPin);

            // โฟกัสไปที่ input ถัดไป
            if (index < pinLength - 1 && value !== '') {
                inputsRef.current[index + 1]?.focus();
            } else if (index === pinLength - 1 && updatedPin.every((val) => val !== '')) {
                router.push('/pin-setup');
            }
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        
        if (e.nativeEvent.key === 'Backspace') {
            const updatedPin = [...pin];
            if (pin[index] !== '') {
                updatedPin[index] = '';
                setPin(updatedPin);
            } else if (index > 0) {
                updatedPin[index - 1] = '';
                setPin(updatedPin);
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <View style={styles.subContainer}>
                <Text style={styles.header1Title}>ยืนยันตัวตน</Text>
                <Text style={styles.header2Title}>กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ</Text>
                <Text style={styles.header3Title}>082-XXX-8998</Text>
                <View style={styles.pinContainer}>
                    {Array.from({ length: pinLength }, (_, i) => (
                        <TextInput
                            key={i}
                            ref={(ref) => (inputsRef.current[i] = ref!)}
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={1}
                            value={pin[i]}
                            onChangeText={(value) => handleChange(value, i)}
                            onKeyPress={(e) => handleKeyPress(e, i)}
                        />
                    ))}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.getPass1Text}>หากคุณไม่ได้รับรหัส?</Text>
                    {isTimeUp ? (
                        <Text style={styles.getPass2Text}>ส่งรหัสใหม่</Text>
                    ) : (
                        <Text style={styles.getPass2Text}>ส่งรหัสใหม่ ({timeLeft})</Text>
                    )}
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    header1Title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    header2Title: {
        fontSize: 15,
        marginBottom: 10,
    },
    header3Title: {
        fontSize: 15,
        marginBottom: 60,
    },
    getPass1Text: {
        fontSize: 15,
        marginBottom: 10,
    },
    getPass2Text: {
        fontSize: 15,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
    pinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 120,
    },
    input: {
        width: 50,
        height: 50,
        borderRadius: 5,
        fontSize: 24,
        padding: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PinInput;