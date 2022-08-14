import React, {useState} from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard} from "react-native";
import { Header , Card ,Input} from '../../components';
import {styles} from './styles';
import colors from "../../constants/colors";

const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState ('');
    
    const onNumberChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    }

    return( 
        <TouchableWithoutFeedback onPress={()=> {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
            <Header title= "Adivina el número" />
            <Text style= {styles.title}>Comenzar Juego</Text>
            <Card style= {styles.card}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Elija un numero</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit  
                        autoCapitalize="none"
                        autoCorrect={false} 
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText= {onNumberChange}
                        value={enteredValue}
                    />
                                    
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Confirmar" onPress={()=> null} color={colors.primary} />
                    <Button title="Limpiar" onPress={()=> null} color={colors.wipeButton}/>
                </View>
            </Card>
                
        </View>
        </TouchableWithoutFeedback>
        
    )
}
export default StartGame;