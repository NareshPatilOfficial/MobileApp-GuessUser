import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

function Card({children}) {
    return (
        <View style={styles.cardContainer}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        marginTop:30,
        marginHorizontal:20,
        padding:16,
        backgroundColor: Colors.primary800,
        borderRadius:8,
        elevation:100,
        alignItems:'center'
      },
})