import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ScreenAfter = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 30}}>Ola! {props.usuario}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={{textAlign: 'center', fontSize: 30}}>TELA DE TESTE (AINDA EM DESENVOLVIMENTO!!)</Text>
      </View>
    </View>
  );
};
