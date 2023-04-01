import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import BackGroundImage from "./assets/images/backGround.png";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  console.log('Started Project');
  const [pickerNumber, setPickedNumber] = useState(0);

  function pickerNumberHandler(number){
    setPickedNumber(number);
  }

  let renderScreen = pickerNumber 
                    ? <GameScreen />
                    : <StartGameScreen onPickNumber={pickerNumberHandler}/>;


  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground 
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backGroungImage}
      >
        <SafeAreaView style={styles.rootContainer}>
          {renderScreen}
        </SafeAreaView>
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
