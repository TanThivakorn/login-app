import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BackButton from '@/components/BackButton';
import RowSpacer from '@/components/RowSpacer';
import Icon from 'react-native-vector-icons/AntDesign';

const TermOfService = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <BackButton />
            <RowSpacer size={150} />
            <View style={styles.subContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.titleContainer}>
                        <Icon name="filetext1" size={25} />
                        <Text style={styles.title}>เงื่อนไขการใช้บริการ</Text>
                    </View>
                    <View
                        style={styles.horizonLine}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.declineButton}
                    >
                        <Text style={styles.declineButtonText}>ปฏิเสธ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push('/log-in')}
                    >
                        <Text style={styles.buttonText}>ยอมรับ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 20,
        elevation: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%'
    },
    headerContainer: {
        flexDirection: 'column',
    },
    titleContainer: {
        padding: 7,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    button: {
        backgroundColor: '#FF6347',
        width: '47%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    declineButton: {
        backgroundColor: 'white',
        borderColor: '#FF6347',
        borderWidth: 1,
        width: '47%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    declineButtonText: {
        color: '#FF6347',
        fontSize: 18,
    },
    horizonLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 20
    }
});

export default TermOfService;
