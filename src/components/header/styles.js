import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        height: 90,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colors.black,
        fontSize: 22,
        fontWeight: 'bold'
    }
})