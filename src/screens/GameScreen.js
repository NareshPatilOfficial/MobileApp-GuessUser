import { StyleSheet, View, Alert, Text } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import {Ionicons} from "@expo/vector-icons"
import { FlatList } from "react-native";
import RoundItem from "../components/RoundItem";


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
    const [guessedNumberList, setGuessedNumberList ] = useState([]);
    
    useEffect(() => {
        if(guessedNumber === props.pickerNumber){
            props.onGameOver();
        }
    }, [props.pickerNumber, guessedNumber, props.onGameOver])

    useEffect(() => {
        minNumber=0;
        maxNumber=100;
    }, [])

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
            minNumber = guessedNumber + 1;
        }
        
        console.log(direction, minNumber, maxNumber);
        let randomNum = generateRandomNumber(minNumber, maxNumber, guessedNumber);
        console.log('randomNum', randomNum);
        setGuessedNumber(randomNum);
        setGuessedNumberList((previousData => [randomNum, ...previousData]));
        props.onSetGuessRoundNumber((previousRoundNumber) => ++previousRoundNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>High or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={guessNumberHanlder.bind(this, 'lower')}>
                            <Ionicons name={'md-remove'} size={20}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={guessNumberHanlder.bind(this, 'higher')}>
                            <Ionicons name={'md-add'} size={20}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessedNumberList}
                    renderItem={({item, index}) => <RoundItem guessedNumber={item} index={index}/>}
                />
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
    },
    listContainer:{
       marginTop:20 
    }
})