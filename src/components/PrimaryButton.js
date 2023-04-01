import { View , Text, Pressable, StyleSheet} from "react-native";

const pressHandler = () => {
    console.log('preseed');
}

function PrimaryButton({children}) {
    return (
        <View style={styles.buttonOuterConainer}>
            <Pressable 
                style={(
                    {pressed}) => pressed 
                    ? [styles.buttonInnerContainer, styles.pressed] 
                    : styles.buttonInnerContainer
                }
                onPress={pressHandler} 
                // android_ripple={{color:'#640233'}}
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
        color:'#ffff',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }
});