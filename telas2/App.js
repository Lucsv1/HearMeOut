import { StyleSheet, Text, View, Image } from "react-native";
import imgLogo from "./assets/LOGO.webp";
import hand from "./assets/hand.png";

const Conteudo = () => {
  return (
    <View style={styles2.main2}>
      <View style={styles2.container}>
        <Image source={hand} style={styles2.imgStyle} resizeMode="cover" />
      </View>
      <View style={styles2.container2}>
        <Text style={styles2.textContainer2}>Financeiro</Text>
        <Text style={styles2.text2Container2}>
          Plusoft para serviços financeiros
        </Text>
      </View>
      <View style={styles2.container3}>
        <View>
          <Text>
            Digitalizar processos sem perder a segurança é uma das prioridades
            do setor. A Plusoft reconhece esse desafio e oferece soluções que
            reúnem privacidade e experiência do cliente
          </Text>
          <View>
            <Text>Converse com nossos especialistas</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={imgLogo} style={styles2.imgContainer} />
      </View>
      <View style={styles.container2}>
        <Conteudo />
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
  imgContainer: {
    marginTop: 30,
    height: 50,
  },
  container2: {
    flex: 8,
    backgroundColor: "#FFEEEE",
  },
});

const styles2 = StyleSheet.create({
  main2: {
    flex: 1,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    alignSelf: "center",
  },
  imgStyle: {
    borderWidth: 1,
    marginTop: 20,
    height: 100,
    width: 100,
  },
  container2: {
    flex: 1,
    borderWidth: 1,
  },
  textContainer2: {
    textAlign: "center",
    fontSize: 30,
  },
  text2Container2: {
    textAlign: "center",
    fontSize: 25,
  },
  container3: {
    flex: 4,
    backgroundColor: "#FFBD59",
  },
});
