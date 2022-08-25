import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import GameScreen from './screens/game-screen';
import StartGame from './screens/start-game';
import { styles } from './styles';
import { Header } from './components';
import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })
  let title = userNumber ? 'Inicio de Juego' : 'Adivina el número';
  const onStartGame= (selectedNumber) => {
    setUserNumber(selectedNumber)
  };

  if (!loaded) {
    return null;
  }
  
  let content= <StartGame onStartGame= {onStartGame}/>

  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title= {title} />
      {content}
    </SafeAreaView>
  );
}


