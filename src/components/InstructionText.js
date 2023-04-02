import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function InstructionText({children, style}) {
    return (
        <Text style={[styles.textContainer, style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    textContainer:{
        fontFamily:'open-sans',
        fontSize:18,
        color:Colors.accent500
    }
})