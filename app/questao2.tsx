import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { questoes } from "../assets/mockups/questoes";

export default function questao2() {
  const pergunta = questoes.find(q => q.id === 2); 

  function responder(index: number) {
    const acertou = (index + 1) === pergunta?.certa;
    const pontos = acertou ? 1 : 0;
    router.push({ pathname: "/questao3", params: { acertos: pontos } });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{pergunta?.pergunta}</Text>

      {pergunta?.respostas.map((resposta, index) => (
        <TouchableOpacity key={index} style={styles.botao} onPress={() => responder(index)}>
          <Text style={styles.textoBotao}>{resposta}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  pergunta: { fontSize: 20, marginBottom: 20, textAlign: "center" },
  botao: {
    backgroundColor: "#f194ff",
    padding: 15,
    borderRadius: 20,
    marginVertical: 5,
  },
  textoBotao: { color: "white", fontSize: 16, textAlign: "center" },
});