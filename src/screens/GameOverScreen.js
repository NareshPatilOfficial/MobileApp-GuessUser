import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import SuccessImage from '../../assets/images/Success.png';
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({pickedNumber, roundsNumber, onStartNewGame}) {
    return(
        <View style={styles.gameOverContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.imageStyle}
                    source={SuccessImage}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text> 
                rounds to guess the number <Text style={styles.highlight}>{pickedNumber}</Text>
            </Text>
            <View style={styles.btnContainer}>
                <PrimaryButton onPress={onStartNewGame}>
                    <Text style={styles.btnText}>
                        Start New Game
                    </Text>
                </PrimaryButton>
            </View>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    gameOverContainer:{
        flex:1,
        padding:24,
        justifyContent:'center'
    },
    imageContainer:{
        marginVertical:30,
        alignSelf:'center',
        borderWidth:3,
        height:250,
        width:250,
        borderColor:Colors.primary500,
        borderRadius:300,
        overflow:'hidden'
    },
    imageStyle:{
        height:250,
        width:300,
        right:20
    },
    summaryText:{
        textAlign:'center',
        fontSize:24,
        fontFamily:'open-sans',
        marginVertical:20
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    },
    btnText:{
        fontFamily:'open-sans'
    },
    btnContainer:{
        alignItems:'center'
    }
})