import { View , Text, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children, onPress}) {

    return (
        <View style={styles.buttonOuterConainer}>
            <Pressable 
                style={(
                    {pressed}) => pressed 
                    ? [styles.buttonInnerContainer, styles.pressed] 
                    : styles.buttonInnerContainer
                }
                onPress={onPress} 
                android_ripple={{color:'#640233'}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterConainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInnerContainer:{
        backgroundColor: '#99063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:100
    },
    buttonText:{
        fontFamily:'open-sans',
        color:'#ffff',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }
});