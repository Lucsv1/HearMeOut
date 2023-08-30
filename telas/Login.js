import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Formulario = (props) => {
  const senha = props.senha;
  const usuario = props.usuario;
  const setSenha = props.setSenha;
  const setUsuario = props.setUsuario;

  //ASYNC LOGIN
  const loginUsuario = () => {
    AsyncStorage.getItem("USUARIOS").then((info) => {
      let lista = [];
      let achou = false;
      if (info) {
        lista = JSON.parse(info);
      }
      for (let i = 0; i < lista.length; i++) {
        const obj = lista[i];
        if (obj.usuario === usuario && obj.senha === senha) {
          achou = true;
          alert("USUARIO ENCONTRADO");
          props.navigation.navigate("Teste")
          break;
        }
      }
      if (!achou) {
        alert("Usuario ou senha estão incorretos");
      }
    });
  };

  return (
    <View style={styles.container2}>
      <View style={styles2.container}>
        <Text style={styles2.text1Container}>HearMe</Text>
        <Text style={styles2.text2Container}>Out</Text>
      </View>
      <View style={styles2.container2}>
        <Text style={styles2.textInput1}>Usuario</Text>
        <TextInput
          value={usuario}
          onChangeText={setUsuario}
          style={styles2.input1}
        />
        <Text style={styles2.textInput2}>Senha</Text>
        <TextInput
          value={senha}
          onChangeText={setSenha}
          style={styles2.input2}
          secureTextEntry={true}
        />
        <View style={styles2.botao}>
          <Text style={styles2.botaoTxt} onPress={()=>{
            loginUsuario()

          }}>
            Cotinuar
          </Text>
          <Button
            title="ler"
            onPress={() => {
              AsyncStorage.getItem("USUARIOS").then((i) => {
                alert(i);
              });
            }}
          />
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
          <Text
            style={styles2.text2Container3}
            onPress={() => {
              props.navigation.navigate("Registro");
            }}
          >
            Registre-se
          </Text>
        </View>
      </View>
    </View>
  );
};

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
    marginTop: 50,
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
    padding: 5,
    fontSize: 20
  },
  input2: {
    backgroundColor: "#FFBD59",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    position: "relative",
    top: 10,
    padding: 5,
    fontSize: 20
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
const styles = StyleSheet.create({
  main: {},
  container: {
    flex: 5,
    borderWidth: 1,
    alignItems: "center",
  },
  imgStyle: {
    width: "50%",
    marginTop: 60,
  },
  container2: {
    flex: 8,
    backgroundColor: "#FFEEEE",
  },
});
