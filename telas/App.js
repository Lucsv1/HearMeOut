import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import imgLogo from "./assets/LOGO.webp";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(props) {

  const Registro = (props) => {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    
    const cadastraUsuario = () =>{

      if (!usuario || !email || !senha) {
        alert("Por favor, preencha todos os campos antes de cadastrar o usuário.");
        return;
      }
      
      AsyncStorage.getItem("USUARIOS")
      .then((info)=>{
        let lista = []
        const obj = {usuario,email, senha}
        if (info) { 
          lista = JSON.parse(info)
        }
        lista.push(obj)
        AsyncStorage.setItem("USUARIOS", JSON.stringify(lista))
        props.setLogado(false)
      }).catch((err)=>{alert("Erro ao ler a lista de usuários: " + err)})
    }

  return (
    <View style={stylesRegistro.main}>
      <View style={stylesRegistro.mainTitulo}>
        <Text style={stylesRegistro.titulo}>Se Registre</Text>
      </View>
      <View style={stylesRegistro.formsMain}>
        <Text style={stylesRegistro.textInput}>Usuario</Text>
        <TextInput value={usuario} onChangeText={setUsuario} style={stylesRegistro.Inputs} />
        <Text style={stylesRegistro.textInput}>Senha</Text>
        <TextInput value={senha} onChangeText={setSenha} style={stylesRegistro.Inputs} />
        <Text style={stylesRegistro.textInput}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={stylesRegistro.Inputs} />
        <View style={stylesRegistro.botao}>
          <Text style={stylesRegistro.botaoTxt} onPress={cadastraUsuario}>Registrar</Text>
        </View>
      </View>
    </View>
  );
}
const Formulario = (props) => {

    const [user, setUser] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [listaUsuario, setListaUsuario] = useState([]);

  
    return (
      <View style={styles2.main}>
        <View style={styles2.container}>
          <Text style={styles2.text1Container}>HearMe</Text>
          <Text style={styles2.text2Container}>Out</Text>
        </View>
        <View style={styles2.container2}>
          <Text style={styles2.textInput1}>Usuario</Text>
          <TextInput value={usuario} onChangeText={setUsuario} style={styles2.input1} />
          <Text style={styles2.textInput2}>Senha</Text>
          <TextInput value={senha} onChangeText={setSenha} style={styles2.input2} />
          <View style={styles2.botao}>
            <Text style={styles2.botaoTxt} onPress={()=>{
              AsyncStorage.getItem("USUARIOS")
              .then((info)=>{
                let lista = []
                let achou = false;
                if (info) { 
                  lista = JSON.parse(info)
                }
                for (let i = 0; i < lista.length; i++) {
                  const obj = lista[i];
                  if (obj.usuario === usuario && 
                      obj.senha === senha) {
                      setLogado(true);
                      achou = true;
                      break; 
                  }
                }
                if (!achou) {
                  alert("Usuario ou senha estão incorretos");
                }
              })
            }}>
              Cotinuar
            </Text>
            <Button title="ler" onPress={()=>{
              AsyncStorage.getItem("USUARIOS")
              .then((i) => {
                alert(i)
              })
            }}/>
          </View>
        </View>
        <View style={styles2.container3}>
          <Text style={styles2.textContainer3}>Esqueceu sua senha ?</Text>
          <Text style={styles2.text2Container3}>clique aqui</Text>
          <View style={styles2.barra}>
            <Text style={styles2.barraTxt}>.</Text>
          </View>
          <Text style={styles2.textContainer3}>ainda nao tem conta ?</Text>
          <View>
            <Text style={styles2.text2Container3} onPress={()=>{
              setLogado(true)
            }}>Registre-se</Text>
          </View>
        </View>
      </View>
    );
  };

  const [logado, setLogado] = useState(false);

  return (
    <NavigationContainer>
      <View style={styles.main}>
        <View style={styles.container}>
          <Image source={imgLogo} style={styles.imgStyle} />
        </View>
        <View style={styles.container2}>
          {!logado ? <Formulario /> : <Registro setLogado={setLogado} />}
        </View>
      </View>
    </NavigationContainer>
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
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  text1Container: {
    fontSize: 50,
  },
  text2Container: {
    fontSize: 50,
    color: "#FFBD59",
  },
  container2: {
    flex: 4,
    width: "60%",
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput1: {
    fontSize: 19,
    position: "relative",
    left: 5,
    fontWeight: "bold",
  },
  textInput2: {
    fontSize: 19,
    position: "relative",
    top: 10,
    left: 5,
    fontWeight: "bold",
  },
  input1: {
    backgroundColor: "#FFBD59",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    height: "10%",
  },
  input2: {
    backgroundColor: "#FFBD59",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    height: "10%",
    position: "relative",
    top: 10,
  },

  botao: {
    alignItems: "center",
    marginTop: 25,
  },
  botaoTxt: {
    fontSize: 20,
    backgroundColor: "#FFBD59",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    textAlign: "center",
    fontWeight: "bold",
  },

  container3: {
    flex: 3,
    alignSelf: "center",
    width: "50%",
  },
  textContainer3: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  text2Container3: {
    textAlign: "center",
    color: "#FFBD59",
    fontSize: 15,
    fontWeight: "bold",
  },
  barra: {
    height: 1,
    borderWidth: 1,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  barraTxt: {
    textAlign: "center",
  },
});

const stylesRegistro = StyleSheet.create({
  main: { flex: 1,},
  mainTitulo: { flex: 1, marginTop: 50 },
  titulo: { textAlign: "center", fontSize: 35 },
  formsMain: { flex: 4, alignItems: "center" },
  textInput: {
    fontSize: 19,
    position: "relative",
    left: 5,
    fontWeight: "bold",
  },
  Inputs: {
    backgroundColor: "#FFBD59",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    height: "5%",
    width: "50%",
    color: 'black'

  },
  botao: {

  },
  botaoTxt:{
    fontSize: 20,
    backgroundColor: "#FFBD59",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    textAlign: "center",
    fontWeight: "bold",
  }
});

