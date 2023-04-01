import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType={'number-pad'}
            />
            <View style={styles.footerActionContainer}>
                <View style={styles.footerBtnContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.footerBtnContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
      backgroundColor:'#72063c',
      borderRadius:8,
      elevation:100,
      alignItems:'center'
    },
    numberInput:{
        height:50,
        width:50,
        textAlign:'center',
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        fontWeight:'bold',
        color:'#ddb52f',
    },
    footerActionContainer:{
        flexDirection:'row',
        marginTop:10
    },
    footerBtnContainer:{
        flex:1
    }
  });