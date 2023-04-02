import { Text, StyleSheet, View, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";


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

    useEffect(() => {
        if(guessedNumber === props.pickerNumber){
            props.onGameOver();
        }
    }, [props.pickerNumber, guessedNumber, props.onGameOver])

    const guessNumberHanlder = (direction) => {

        if(
            (direction === 'lower' && guessedNumber < props.pickerNumber) ||
            (direction === 'higher' && guessedNumber > props.pickerNumber)
        ){
            Alert.alert(
                "Don't lie!",
                'You know that this is wrong...',
                [{text:'Sorry', style:'cancel'}]
            );
            return;
        }

        if(direction === 'lower'){
            maxNumber = guessedNumber;
        }else {
            minNumber = guessedNumber;
        }
        
        console.log(direction, minNumber, maxNumber);
        let randomNum = generateRandomNumber(minNumber, maxNumber, guessedNumber);
        setGuessedNumber(randomNum);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>High or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={guessNumberHanlder.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={guessNumberHanlder.bind(this, 'higher')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        padding:30,
        marginTop:20
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:5
    },
    buttonContainer:{
        flex:1
    },
    instructionText:{
        marginBottom:8
    }
})