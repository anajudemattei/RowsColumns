import { SafeAreaView, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';
import { SafeAreaView } from 'react-native-web';

export default function HomeScreen() {
    const professores = [
        { id: "1", name: "Marcelo", role: "Professor" },
        { id: "2", name: "Thiago", role: "Professor" },
        { id: "3", name: "Eduardo", role: "Professor" },
        { id: "4", name: "Felipe", role: "Professor" },
    ];

    const alunos = [
        { id: "1", name: "Enzo", role: "Aluno de Mobile" },
        { id: "2", name: "Alejandra", role: "Aluna de BackEnd" },
        { id: "3", name: "Julia", role: "Aluna de Desing" },
        { id: "4", name: "Evelyn", role: "Aluna de Algoritmos" },
        { id: "5", name: "Isabella", role: "Aluna de Mobile" },
        { id: "6", name: "Lucas", role: "Aluno de " },
        { id: "7", name: "Caio", role: "Aluno de" },
        { id: "8", name: "Luzia", role: "Aluna de " },    
        { id: "9", name: "Ana", role: "Aluna de " },
        { id: "10", name: "Maria", role: "Aluna de BackEnd" },
        { id: "11", name: "Laura", role: "Aluna de Design" },
        { id: "12", name: "Anna", role: "Aluna de Algoritmo" },
    ];

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView>
            <Header />
            <Text style={styles.sectionTitle}>Professores</Text>
            <FlatList
                styles={styles.horizontalList}
                data={professores}
                horizontal={true} 
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id} // Removido o "}" extra
                renderItem={({ item }) => (
                <View style={[styles.cardContainer, { width: cardWidth }]}>
                    <Card employee={item} onPress={() => navigation.navigate("Details", { employee: item })} />
                </View>
            )}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
);