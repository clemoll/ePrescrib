import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRScannerPage() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrCodeList, setQRCodeList] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({data }) => {
        setScanned(true);
        setQRCodeList([...qrCodeList, data]);
        alert(`QR Code scanné !\nDonnées : ${data}`);
    };

    if (hasPermission === null) {
        return <Text>Requesting camera permission...</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.listtext}> QR Codes scannés :</Text>
                {qrCodeList.map((qrCode, index) => (
                    <Text style={styles.listtext} key={index}> {qrCode} </Text>
                ))}
            </View>

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && (
                <View style={styles.button}>
                    <TouchableOpacity  onPress={() => setScanned(false)}>
                        <Text style={styles.buttontitle}> Appuyer pour scanner un autre QR code</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        width: '80%',
        height: '10%',
        marginBottom: '8%',
        borderRadius: 20,
        backgroundColor: 'aquamarine',
    },
    buttontitle: {
        fontSize: 30,
        textAlign: 'center',
    },
    list: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '8%',
    },
    listtext: {
        fontSize: 20,
    }
});
