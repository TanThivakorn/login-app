import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox } from 'react-native-paper';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [checked, setChecked] = useState(false);

    const handleLogin = () => {
        router.push('/request-otp');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="ชื่อผู้ใช้งาน"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="รหัสผ่าน"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <View style={styles.rowContainer}>
                <View style={styles.checkBoxContainer}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => setChecked(!checked)}
                    />
                    <Text style={styles.text}>บันทึกการเข้าสู่ระบบ</Text>
                </View>
                <Text style={styles.text}>ลืมรหัสผ่าน?</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
            <View style={styles.rowNoUserText}>
                <View
                    style={styles.horizonLine}
                />
                <Text style={styles.noUserText}>ไม่มีบัญชีผู้ใช้</Text>
                <View
                    style={styles.horizonLine}
                />
            </View>
            <TouchableOpacity
                style={styles.registerButton}
            >
                <Text style={styles.registerButtonText}>เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        paddingTop: 290,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginTop: 35,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 13,
        lineHeight: 34,
    },
    noUserText: {
        fontSize: 13,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: '#FF6347',
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: 'white',
        borderColor: '#FF6347',
        borderWidth: 1,
        width: '100%',
        height: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    registerButtonText: {
        color: '#FF6347',
        fontSize: 15,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    rowNoUserText: {
        width: '100%',
        marginTop: 30,
        flexDirection: 'row',
    },
    horizonLine: {
        flex: 1,
        height: '55%',
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default Login;
