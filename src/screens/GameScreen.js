import { Text, StyleSheet, View, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";


function generateRandomNumber(min, max, excludeNumber){
    const randNumber = Math.floor(Math.random() * (max - min) + min);

    if(randNumber === excludeNumber){
        return generateRandomNumber(min, max, excludeNumber);
    }else{
        return randNumber;
    }
}

let minNumber=0;
let maxNumber=100;

function GameScreen(props) {
    const intialGuessNumber = generateRandomNumber(minNumber, maxNumber, props.pickerNumber);
    const [guessedNumber, setGuessedNumber] = useState(intialGuessNumber);
    
    const guessNumberHanlder = (direction) => {
        if(guessedNumber === props.pickerNumber) return;
        if(
            (direction === 'lower' && guessedNumber < props.pickerNumber) ||
            (direction === 'higher' && guessedNumber > props.pickerNumber)
        ){
            Alert.alert(
                'You lied!',
                'This is not fair..',
                [{text:'Sorry', style:'default'}]
            );
            return;
        }
        if(direction === 'lower'){
            maxNumber = guessedNumber;
        }else {
            minNumber = guessedNumber
        }
        
        console.log(direction, minNumber, maxNumber);
        let randomNum = generateRandomNumber(minNumber, maxNumber, guessedNumber);
        setGuessedNumber(randomNum);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <View>
                <Text>High or Lower?</Text>
                <View>
                    <PrimaryButton onPress={guessNumberHanlder.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={guessNumberHanlder.bind(this, 'higher')}>+</PrimaryButton>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:30,
        marginTop:20
    },
})