import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

function StartGameScreen(props) {
    const [enteredNumber, setEnteredName] = useState('');

    const numberInputHandler = (text) => {
        setEnteredName(text);
    }

    const resetInputHandler = () => {
        setEnteredName('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber)){
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text:'Ok', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        props.onPickNumber(chosenNumber);
        setEnteredName('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                autoCapitalize='none'
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
                keyboardType={'number-pad'} // always take number n& text as string
            />
            <View style={styles.footerActionContainer}>
                <View style={styles.footerBtnContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.footerBtnContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
      marginTop:50,
      marginHorizontal:20,
      padding:16,
      backgroundColor: Colors.primary800,
      borderRadius:8,
      elevation:100,
      alignItems:'center'
    },
    numberInput:{
        height:50,
        width:50,
        textAlign:'center',
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        fontWeight:'bold',
        color:Colors.accent500,
    },
    footerActionContainer:{
        flexDirection:'row',
        marginTop:10
    },
    footerBtnContainer:{
        flex:1
    }
  });