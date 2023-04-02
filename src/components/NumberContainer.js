import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function NumberContainer({children}) {
    return(
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer:{
        borderWidth: 4,
        borderColor:Colors.accent500,
        marginHorizontal:40,
        marginVertical:20,
        borderRadius:8,
        paddingVertical:20,
        alignItems:'center'
    },
    numberText:{
        color: Colors.accent500,
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    }
})