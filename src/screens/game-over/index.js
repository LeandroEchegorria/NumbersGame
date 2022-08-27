import React, {useState,useEffect} from "react";
import {styles} from './styles';
import { View, Image , Text , Button , Dimensions} from "react-native";
import { Card } from "../../components";
import colors from "../../constants/colors";

const GameOver = ({onRestart , rounds, choice }) => {
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait);
    }

    useEffect(()=>{
        Dimensions.addEventListener('change', statePortrait());
        return ()=>{
            Dimensions.removeEventListener('change', statePortrait());
        }
    });

    return (
        <View style={isPortrait ? styles.container : styles.containerLandscape}>
                <Image 
                    source={require("../../../assets/game_over.png")} 
                    style={isPortrait ? styles.image : styles.imageLandscape}
                    resizeMethod="scale"
                />
            <Card style={styles.card}>
                <Text style={styles.title}>
                    Puntaje: {rounds}
                </Text>
                <Text style={styles.title}>
                    El nro era: {choice}
                </Text>

                <Button title="Volver a jugar" onPress={onRestart} color={colors.secondary}/>
            </Card>
        </View>
    )
}
export default GameOver;
