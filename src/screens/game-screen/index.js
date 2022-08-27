import React , {useState , useRef, useEffect} from "react";
import { View, Text, Button, Dimensions, Alert } from "react-native";
import { Card, NumberContainer } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";



const GameScreen = ({userOption , onGameOver}) => {
    const generateRamdomBetween = ((min, max, exclude) => {
        min=Math.ceil(min);
        max =Math.floor(max);
        const ramdomNumber = Math.floor(Math.random() * (max-min)) + min;
        if (ramdomNumber == exclude){
            generateRamdomBetween(min, max, exclude);
        } else {
            return ramdomNumber;
        }
    });

    const [currentGuess, setCurrentGuess] = useState(generateRamdomBetween(1,100, userOption))
    const [rounds, setRounds] = useState(0); //nro de rondas 
    const currentLow = useRef(1); 
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) => {
        console.log(currentGuess,userOption)
        if (
            (direction == 'lower' && currentGuess < userOption) ||
            (direction == 'greater' && currentGuess > userOption)
        ){
            Alert.alert('Incorrecto', 'La direccion es incorrecta',[
                {text: 'Aceptar', style:'destructive'},
            ]);
            return;
        }

        if (direction== 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRamdomBetween(
            currentLow.current, currentHigh.current, currentGuess);
            setCurrentGuess(nextNumber);
            setRounds((current)=> current + 1); //setRounds(rounds + 1); 
    }

    useEffect(() => {
        if (currentGuess==userOption){
            onGameOver(rounds);
        }
    }, [currentGuess , userOption , onGameOver]);


    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.text}>La suposición del oponente</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Menor" 
                        onPress={()=> onHandleNextGuess('lower')} 
                        color= {colors.primary}
                    />
                    <Button 
                        title="Mayor" 
                        onPress={()=> onHandleNextGuess('greater')} 
                        color= {colors.secondary}
                    />
                </View>
                {/* <Button title="Volver a jugar" onPress={onRestart} color={colors.secondary}/> */}
            </Card>
        </View>
    )
}
export default GameScreen;