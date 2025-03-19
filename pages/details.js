import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EmployeeDetail({ route }) {
    const { employee } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{employee.name}</Text>
            <Text style={styles.position}>{employee.position}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#BEA4D3",
    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    position: {
        fontSize: 20,
    },
});