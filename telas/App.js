import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import imgLogo from "./assets/LOGO.webp";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Formulario = (props) => {
  return (
    <View style={styles2.main}>
      <View style={styles2.container}>
        <Text style={styles2.text1Container}>HearMe</Text>
        <Text style={styles2.text2Container}>Out</Text>
      </View>
      <View style={styles2.container2}>
        <Text>Usuario</Text>
        <TextInput/>
        <Text>Senha</Text>
        <TextInput/>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={imgLogo} style={styles.imgStyle} />
      </View>
      <View style={styles.container2}>
        <Formulario />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFBD59",
    alignItems: "center",
  },
  imgStyle: {
    marginTop: 30,
    height: 50,
  },
  container2: {
    flex: 8,
    backgroundColor: "#FFEEEE",
  },
});

const styles2 = StyleSheet.create({
  main: {
    flex: 1,
  },
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: 30,
  },
  text1Container: {
    fontSize: 40,

  },
  text2Container:{
    fontSize: 40,
    color: "#FFBD59"
  },
  container2:{
    flex: 4,
  }
});
