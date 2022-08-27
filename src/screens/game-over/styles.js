import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

export const styles= StyleSheet.create( {
    container: {
        flex:0.9,
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerLandscape:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image:{
        width: width*0.3,
        height: height*0.3,

    },
    imageLandscape:{
        
        width: width*0.3,
        height: height*0.3,

    },
    card:{
        padding:20,
        alignItems: 'center',
        marginBottom: 20,

    },
    title:{
        fontFamily: 'Lato-Bold',
        fontSize:25,
        paddingVertical:10,
    }
})