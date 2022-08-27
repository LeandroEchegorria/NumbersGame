import React, {useState} from "react";
import { 
    View, 
    Text, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard, 
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { Card ,Input, NumberContainer} from '../../components';
import {styles} from './styles';
import colors from "../../constants/colors";

const isAndroid= Platform.OS == 'android';

const StartGame = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState ('');
    const [confirmed, setConfirmed] = useState (false);
    const [selectedNumber, setSelectedNumber] = useState ('');
    
    const onNumberChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    }
    const onResetInput = () =>{
         setEnteredValue('');
         setConfirmed(false);
    };
    const onHandleConfirm = () => {
        const chosenNumber = parseInt(enteredValue, 10)
        if (isNaN(chosenNumber) || chosenNumber<= 0 || chosenNumber > 99) return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
    };
    
    const confirmedOutput = () => (
            <Card style={styles.summaryContainer}>
                <Text style={styles.summaryText}>Tu seleccionaste</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button title="Empezar Juego" onPress={()=>onStartGame(selectedNumber)} color={colors.secondary}/>
                </View>
                
            </Card>
        );

    
    return( 
        <KeyboardAvoidingView 
            behavior={isAndroid ? 'padding' : 'position'} 
            contentContainerStyle={styles.container}
            keyboardVerticalOffset={30}
            style= {styles.container}
        >
            <ScrollView>
                <TouchableWithoutFeedback 
                onPress={()=> {
                    Keyboard.dismiss();
                }}>
                <View style={styles.container}>
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
                            <Button title="Confirmar" onPress={()=> onHandleConfirm()} color={colors.primary} />
                            <Button title="Limpiar" onPress={()=>onResetInput()} color={colors.wipeButton}/>
                        </View>
                    </Card>
                    {confirmed && confirmedOutput()}
                        
                </View>
            
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
        
    )
}
export default StartGame;