import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title(props) {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:12,
        
    }
})