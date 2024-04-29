import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Tela de Receitas Muito Maravilhosas / Gostosas</Text>
            <Text>{"\n"}</Text>
            <Button
            title='Ir Para a Lista de Receitas'
            onPress={() =>
            navigation.navigate('Receitas', { name: 'Receitas' })}
        />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        }
    });