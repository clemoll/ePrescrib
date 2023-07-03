import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Qrcode() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR code</Text>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontitle}> Scanner un QR code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontitle}> Générer un QR code </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 16,
    },
    button: {
        width: '75%',
        borderRadius: 20,
        backgroundColor: 'aquamarine',
    },
    title: {
        width: '100%',
        height: '10%',
        borderRadius: 20,
        backgroundColor: 'aquamarine',
        fontSize: 50,
        textAlign: 'center',
    },
    buttontitle: {
        fontSize: 30,
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
    }
});
