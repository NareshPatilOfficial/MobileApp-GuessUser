import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import BackGroundImage from "./assets/images/backGround.png";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import Colors from "./src/constants/colors";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  console.log('Started Project');
  const [pickerNumber, setPickedNumber] = useState(0);
  const [isGameOver, setGameOverValue] = useState(true);

  function pickerNumberHandler(number){
    setPickedNumber(number);
    setGameOverValue(false);
  }

  const gameOverHandler = () => {
    setGameOverValue(true);
  }

  let renderScreen = pickerNumber 
                    ? <GameScreen 
                        pickerNumber={pickerNumber}
                        onGameOver={gameOverHandler}
                      />
                    : <StartGameScreen onPickNumber={pickerNumberHandler}/>;

  if(isGameOver && pickerNumber){
    renderScreen = <GameOverScreen />
  }
  
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootContainer}>
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
