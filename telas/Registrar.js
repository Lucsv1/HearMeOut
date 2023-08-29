import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const Registro = (props) => {

    const usuario = props.usuario
    const email = props.email
    const senha = props.senha

    //ASYNC CADASTRO
    const cadastraUsuario = () => {
        if (!usuario || !email || !senha) {
          alert(
            "Por favor, preencha todos os campos antes de cadastrar o usuário."
          );
          return;
        }
        AsyncStorage.getItem("USUARIOS")
          .then((info) => {
            let lista = [];
            const obj = {usuario, email, senha };
            if (info) {
              lista = JSON.parse(info);
            }
            lista.push(obj);
            AsyncStorage.setItem("USUARIOS", JSON.stringify(lista));
            alert("Usuario Cadastrado com sucesso");
          })
          .catch((err) => {
            alert("Erro ao ler a lista de usuários: " + err);
          });
      };
    

    return (
      <View style={stylesRegistro.main}>
        <View style={stylesRegistro.mainTitulo}>
          <Text style={stylesRegistro.titulo}>Se Registre</Text>
        </View>
        <View style={stylesRegistro.formsMain}>
          <Text style={stylesRegistro.textInput}>Usuario</Text>
          <TextInput
            value={props.usuario}
            onChangeText={props.setUsuario}
            style={stylesRegistro.Inputs}
          />
          <Text style={stylesRegistro.textInput}>Senha</Text>
          <TextInput
            value={props.senha}
            onChangeText={props.setSenha}
            style={stylesRegistro.Inputs}
          />
          <Text style={stylesRegistro.textInput}>Email</Text>
          <TextInput
            value={props.email}
            onChangeText={props.setEmail}
            style={stylesRegistro.Inputs}
          />
          <View style={stylesRegistro.botao}>
            <Text
              style={stylesRegistro.botaoTxt}
              onPress={() => {
                cadastraUsuario();
              }}
            >
              Registrar
            </Text>
            <View>
              <Text
                style={stylesRegistro.botaoBack}
                onPress={() => {
                  props.navigation.goBack();
                }}
              >
                Voltar
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const stylesRegistro = StyleSheet.create({
    main: { flex: 1 },
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
      width: "50%",
      color: "black",
      padding: 10,
      fontSize: 20
    },
    botao: {},
    botaoTxt: {
      fontSize: 20,
      backgroundColor: "#FFBD59",
      padding: 10,
      borderRadius: 10,
      width: "45%",
      textAlign: "center",
      fontWeight: "bold",
    },
    botaoBack: {
      fontSize: 20,
      backgroundColor: "#FFBD59",
      padding: 10,
      borderRadius: 10,
      textAlign: "center",
      marginTop: 20,
      fontWeight: "bold",
    },
  });