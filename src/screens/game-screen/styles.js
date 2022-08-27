import { StyleSheet, Dimensions} from "react-native";
import colors from "../../constants/colors";


const {width , height} = Dimensions.get('window');

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: height > 600 ? 15 : 10,
        width: width*.8,
        marginHorizontal: 20,
        padding: 15,
        
        
    },
    card:{
        marginTop: 20,
        width: width*.8,
        alignItems: 'center',
        padding: 10,

    },
    text: {
        fontSize: 15,
    }

})