import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20

    },
    title: {
        color: colors.wipeButton,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    card: {
        marginHorizontal:20,
        justifyContent: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        
        marginHorizontal: 20,
        alignItems: 'center',        
        height: 150,
        

    },
    inputLabel:{
        fontSize: 20,
        paddingVertical: 10,
        textAlign: 'center'
    },
    input:{
        width: '20%',
        maxWidth: 110,
        paddingVertical:10,
        fontSize: 30,
        textAlign: 'center'

    },
    buttonContainer:{
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    summaryContainer: {
        marginHorizontal:20,
        alignItems: "center",
        padding: 10
    },
    summaryText: {
        fontSize: 20,
    }
})