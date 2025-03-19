import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Aula de Mobile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        paddingVertical: 20,
        alignItems: "center",
    },
    headerText: {
        fontSize: 28,
        color: "white",
    },
});