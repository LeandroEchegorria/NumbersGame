import { StyleSheet } from "react-native";
import colors from '../../constants/colors';

export const styles= StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: colors.primary,
        padding:10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    number: {
        color: colors.primary,
        fontSize: 22
    },
    summaryContainer:{
        flex:1,
    },
    summaryText:{
        flex:1,
    },

})