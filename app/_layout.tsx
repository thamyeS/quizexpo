import { Stack } from "expo-router";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(255, 168, 233, 1)",
  },
  texto: {
    color: "#000000ff",
    fontSize: 30,
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Início Quiz"}}/>
    <Stack.Screen name="questao1" options={{ title: "Questão 1"}}/>
    <Stack.Screen name="questao2" options={{ title: "Questão 2"}}/>
    <Stack.Screen name="questao3" options={{ title: "Questão 3"}}/>
    <Stack.Screen name="questao4" options={{ title: "Questão 4"}}/>
    <Stack.Screen name="questao5" options={{ title: "Questão 5"}}/>
    <Stack.Screen name="resultado" options={{ title: "Resultado"}}/>

  </Stack>;
}