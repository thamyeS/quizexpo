 import { Text, View, StyleSheet, Button} from "react-native";
 import { router } from "expo-router";

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8d8e9ff",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 6,
    padding: 20,
    backgroundColor: "#f9c2ff",
    borderRadius: 8,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#a74c88ff",
  },
  texto: {
    fontSize: 20,
    color: "#a74c88ff",
  },
  
});

export default function Index() {
  
  function IrParaQuestao1(){
    router.push(`/questao1`);
  }
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.texto}> Bem Vindo ao Quiz de Matemática </Text>
      <Button 
        title="Iniciar Quiz"
        color={"#f194ff"}
        onPress={() => IrParaQuestao1()}
      />
    </View>
  );
}



