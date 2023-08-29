import { StyleSheet, Text, View, Image } from "react-native";
import imgLogo from "./assets/LOGO.webp";
import hand from "./assets/hand.png";
import imgRapaz from './assets/rapaz.png';
import imgSeta from './assets/seta.png';

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
        <View style={styles2.content3}>
          <Text style={styles2.textContent3}>
            Digitalizar processos sem perder a segurança é uma das prioridades
            do setor. A Plusoft reconhece esse desafio e oferece soluções que
            reúnem privacidade e experiência do cliente
          </Text>
          <View style={styles2.botao}>
            <Text style={styles2.botaoText}>Converse com nossos especialistas</Text>
          </View>
        </View>
        <Image source={imgRapaz} style={styles2.imgContainer3} />
      </View>
      <View style={styles2.container4}>
        <Image source={imgSeta} style={styles2.fotter} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={imgLogo} style={styles.imgContainer} />
      </View>
      <View style={styles.container2} >
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
    marginTop: 35,
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
  },
  container: {
    flex: 2,
    alignSelf: "center",
  },
  imgStyle: {
    marginTop: 50,
    height: 100,
    width: 100,
  },
  container2: {
    flex: 1,
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
    flex: 3,
    backgroundColor: "#FFBD59",
    flexDirection: 'row',
    height: 200,
  },
  content3:{
   flexDirection: 'column',
   width: '70%',
   alignItems: 'center',
  },
  textContent3:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30


  },
  imgContainer3:{
    width: 300,
    height: 320,
    position: 'absolute',
    left: '45%',
    bottom: 0.1
  },
  botao:{
    borderWidth:1,
    width: '70%',
    marginTop: 40,
    borderRadius: 10,
    padding: 5
  },
  botaoText: {
    textAlign: 'center',
    fontWeight: 'bold'

  },
  container4:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fotter:{
    width: 100,
    height: 100,
  }
});
