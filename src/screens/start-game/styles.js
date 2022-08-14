import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        color: colors.wipeButton,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    card: {
        marginHorizontal:20,
        justifyContent: 'center'
    },
    inputContainer: {
        
        marginHorizontal: 20,
        alignItems: 'center',        
        height: 150,
        

    },
    inputLabel:{
        fontSize: 15,
        paddingVertical: 10,
        textAlign: 'center'
    },
    input:{
        width: '20%',
        maxWidth: 110,
        paddingVertical:10,
        fontSize: 28,
        textAlign: 'center'

    },
    buttonContainer:{
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})