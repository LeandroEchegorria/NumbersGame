import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import GameScreen from './screens/game-screen';
import StartGame from './screens/start-game';
import { styles } from './styles';
import { Header } from './components';
import { useFonts } from 'expo-font';
import GameOver from './screens/game-over';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })
  
  const onStartGame= (selectedNumber) => {
    setUserNumber(selectedNumber)
  };

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const onRestartGame= () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  if (!loaded) {
    return null;
  }
  
  let content= <StartGame onStartGame= {onStartGame}/>

  if (userNumber && guessRounds <=0) {
    content = 
    <GameScreen 
      userOption={userNumber} 
      onGameOver={onGameOver} 
      onRestart={onRestartGame}
    />
  } else if (guessRounds > 0) {
    content = 
    <GameOver 
      choice={userNumber} 
      rounds={guessRounds} 
      onRestart={onRestartGame}
    />

  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title= {'Adivina el Numero'} />
      {content}
    </SafeAreaView>
  );
}


