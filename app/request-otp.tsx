import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BackButton from '@/components/BackButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const RequestOtp = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <BackButton />
            <View style={styles.subContainer}>
                <Icon name="cellphone-lock" size={75} />
                <Text style={styles.otpText}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
                <Text style={styles.telText}>082-XXX-8998</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push('/auth')}
                >
                    <Text style={styles.buttonText}>ขอรหัส OTP</Text>
                </TouchableOpacity>
                <Text style={styles.infoText}>กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX</Text>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF6347',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 50
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    otpText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40
    },
    telText: {
        fontSize: 20,
        marginTop: 20
    },
    infoText: {
        fontSize: 10,
        marginTop: 25
    }
});

export default RequestOtp;
