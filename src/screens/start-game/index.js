import React from "react";
import { View, Text ,  Button} from "react-native";
import { Header , Card ,Input} from '../../components';
import {styles} from './styles';
import colors from "../../constants/colors";

const StartGame = () => {
    return( 
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
                    />
                                    
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Confirmar" onPress={()=> null} color={colors.primary} />
                    <Button title="Limpiar" onPress={()=> null} color={colors.wipeButton}/>
                </View>
            </Card>
                
        </View>
    )
}
export default StartGame;