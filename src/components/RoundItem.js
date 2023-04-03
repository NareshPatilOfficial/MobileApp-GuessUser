import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function RoundItem({index, guessedNumber}){
    return (
        <View style={style.rootContainer}>
            <Text style={style.text}>#{index}</Text>
            <Text style={style.text}>you guessed {guessedNumber}</Text>
        </View>
    )
}

export default RoundItem;

const style = StyleSheet.create({
    rootContainer:{
        backgroundColor:Colors.primary500,
        textAlign:'center',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,
        marginTop:50,
        justifyContent:'space-between',
        borderRadius:20
    },
    text:{
        fontSize:16,
        color:'white'
    }
})