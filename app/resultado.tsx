import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { questoes } from "../assets/mockups/questoes";
import { router } from "expo-router";

export default function Resultado() {
  const { acertos } = useLocalSearchParams<{ acertos: string }>();
  const pontuacao = parseInt(acertos || "0", 10);

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#f7a7e9ff",
  },
  resultado: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
  },
});
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parabéns!</Text>
      <Text style={styles.resultado}>
        Você acertou {pontuacao} de {questoes.length} questões
      </Text>

      <Button title="Reiniciar Quiz" onPress={() => router.replace("/")} />
    </View>
  );
}