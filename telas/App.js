import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import imgLogo from "./assets/LOGO.webp";

const Formulario = (props) => {
  return (
    <View style={styles2.main}>
      <View style={styles2.container}>
        <Text style={styles2.text1Container}>HearMe</Text>
        <Text style={styles2.text2Container}>Out</Text>
      </View>
      <View style={styles2.container2}>
        <Text style={styles2.textInput1}>Usuario</Text>
        <TextInput style={styles2.input1}/>
        <Text style={styles2.textInput2}>Senha</Text>
        <TextInput style={styles2.input2}/>
        <View style={styles2.botao}>
          <Text style={styles2.botaoTxt}>
            Cotinuar
          </Text>
        </View>
      </View>
      <View style={styles2.container3}>
        <Text style={styles2.textContainer3}>Esqueceu sua senha ?</Text>
        <Text style={styles2.text2Container3}>clique aqui</Text>
        <View style={styles2.barra}>
          <Text style={styles2.barraTxt}>.</Text>
        </View>
        <Text style={styles2.textContainer3}>ainda nao tem conta ?</Text>
        <Text style={styles2.text2Container3}>Registre-se</Text>
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
    fontSize: 50,

  },
  text2Container:{
    fontSize: 50,
    color: "#FFBD59"
  },
  container2:{
    flex: 4,
    width: "60%",
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textInput1:{
    fontSize:19,
    position: 'relative',
    left: 5,
    fontWeight: 'bold'
  },
  textInput2:{
    fontSize:19,
    position: 'relative',
    top: 10,
    left: 5,
    fontWeight: 'bold'
  },
  input1:{
    backgroundColor: "#FFBD59",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    height:'10%'
  },
  input2:{
    backgroundColor: "#FFBD59",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    height:'10%',
    position: 'relative',
    top: 10,
  },

  botao:{
    alignItems: 'center',
    marginTop: 25
  },
  botaoTxt:{
    fontSize:20,
    backgroundColor: '#FFBD59',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  container3:{
    flex: 3,
    alignSelf: 'center',
    width: "50%",
  },
  textContainer3:{
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2Container3:{
    textAlign:'center',
    color: '#FFBD59',
    fontSize: 15,
    fontWeight: 'bold'
  },
  barra:{
    height: 1,
    borderWidth: 1,
    width: '50%',
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10

  },
  barraTxt:{
    textAlign:'center',
  }

});
