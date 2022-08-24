import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import GameScreen from './screens/game-screen';
import StartGame from './screens/start-game';
import { styles } from './styles';
import { Header } from './components';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  let title = userNumber ? 'Inicio de Juego' : 'Adivina el número';
  const onStartGame= (selectedNumber) => {
    setUserNumber(selectedNumber)
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


