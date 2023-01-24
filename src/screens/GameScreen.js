import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import colors from '../constants/colors'

const GameScreen = () => {
    const [currentGuess, setCurrentGuess] = useState('')
    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1))
    }, [])
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.texts}>Oponent's Guess</Text>
            <Text style={styles.texts}>{currentGuess}</Text>
            <Card newStyles={styles.buttonContainer}>
                <Pressable onPress={() => console.log('Menor')}>
                    <Text> Menor </Text>
                </Pressable>
                <Pressable onPress={() => console.log('Mayor')}>
                    <Text> Mayor </Text>
                </Pressable>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '80%',
    },
    texts: {
        color: colors.terciary,
    }
})