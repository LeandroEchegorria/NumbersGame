import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        height: 90,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Lato-Regular',
    },
    title: {
        color: colors.black,
        fontSize: 22,
        fontFamily: 'Lato-Black',
    }
})