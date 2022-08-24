import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '80%',
        marginHorizontal: 20,
        padding: 15,
        
        
    },
    card:{
        marginTop: 20,
        marginHorizontal: 20,
        width: '80%',
        alignItems: 'center',
        padding: 10,

    },
    text: {
        fontSize: 15,
    }

})