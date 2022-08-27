import React from "react";
import {styles} from './styles';
import { View, Image , Text , Button } from "react-native";
import { Card } from "../../components";
import colors from "../../constants/colors";

const GameOver = ({onRestart , rounds, choice }) => {
    return (
        <View style={styles.container}>
           
            <Card style={styles.card}>
                <Text style={styles.title}>
                    Puntaje: {rounds}
                </Text>
                <Text style={styles.title}>
                    El nro era: {choice}
                </Text>
                <Image 
                    source={require("../../../assets/game_over.png")} 
                    style={styles.image}
                    resizeMethod="resize"
                />
                <Button title="Volver a jugar" onPress={onRestart} color={colors.secondary}/>
            </Card>
        </View>
    )
}
export default GameOver;
