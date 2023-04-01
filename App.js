import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import BackGroundImage from "./assets/images/backGround.png";

export default function App() {
  console.log('Started Project');
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground 
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backGroungImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1
  },
  backGroungImage:{
    opacity:0.15
  }
})
