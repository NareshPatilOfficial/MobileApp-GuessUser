import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function RoundItem({index, guessedNumber}){
    return (
        <View style={style.rootContainer}>
            <Text style={style.text}>#{index}</Text>
            <Text style={style.text}>Opponent's Guess: {guessedNumber}</Text>
        </View>
    )
}

export default RoundItem;

const style = StyleSheet.create({
    rootContainer:{
        backgroundColor:Colors.accent500,
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,
        marginVertical:8,
        justifyContent:'space-between',
        borderRadius: 40,
        borderColor:Colors.primary500,
        borderWidth:2,
        width:'100%',
        elevation:4
    },
    text:{
        fontFamily:'open-sans'
    }
})