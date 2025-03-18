import React from 'react';
import { View, Text, StyleSheet } from 'react-native';  

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Aula de Mobile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7287b',
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 28
    }
});