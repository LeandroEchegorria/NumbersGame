import React , {useState} from "react";
import { View, Text, Button } from "react-native";
import { Card, NumberContainer } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";


const generateRamdomBetween = (min, max, exclude) => {
    min=Math.ceil(min);
    max =Math.floor(max);
    const ramdomNumber = Math.floor(Math.random() * (max-min)) + min;
    if (ramdomNumber === exclude){
        return generateRamdomBetween(min, max, exclude);
    } else {
        return ramdomNumber;
    }
}

const GameScreen = ({userOption}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRamdomBetween(1,100, userOption))
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.text}>La suposición del oponente</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button title="Menor" onPress={()=> null} color= {colors.primary}/>
                    <Button title="Mayor" onPress={()=> null} color= {colors.secondary}/>
                </View>
                
            </Card>
        </View>
    )
}
export default GameScreen;