import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import colors from './src/constants/colors';

import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'MontserratRegular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'MontserratSemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    'VarelaRoundRegular': require('./src/assets/fonts/VarelaRound-Regular.ttf')
  })
  const [userNumber, setUserNumber] = useState();
  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if (userNumber) {
    content = <GameScreen />
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header 
        newStyles={{fontFamily:'MontserratSemiBold'}}
        title={'Guess the number'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
