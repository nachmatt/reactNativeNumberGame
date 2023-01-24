import { Pressable, StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card' 
import Input from '../components/Input'
import colors from '../constants/colors'

const StartGameScreen = ({ onStartGame }) => {
    const [value, setValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const handleInput = (text) => {
        // Replaces every character that's not a number between 0-9 for an empty string.
        setValue(text.replace(/[^0-9]/g, ''));
    }

    const handleResetInput = () => {
        setValue('');
        setConfirmed(false)
    }
    
    const handleConfirmation = () => {
        const newValue = parseInt(value);
        if(newValue === NaN || newValue <= 0 || newValue > 99) {
            return
        } else {
            setConfirmed(true)
            setSelectedNumber(newValue)
            setValue('')
        }
    }


    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Text style={styles.title}>Start Game</Text>
                    <Card newStyles={styles.inputContainer}>
                        <Text>Choose a Number</Text>
                        <Input 
                        blurOnSubmit 
                        autocapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='numeric' 
                        maxLength={2}
                        value={value}
                        onChangeText={handleInput}/>
                        <View style={styles.buttonContainer}>
                            <View>
                                <Pressable style={styles.buttonClear} onPress={handleResetInput}>
                                    <Text style={styles.buttonText}>Clear</Text>
                                </Pressable>
                            </View>
                            <View>
                                <Pressable style={styles.buttonConfirm} onPress={handleConfirmation}>
                                    <Text style={styles.buttonText}>Confirm</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Card>
                    {confirmed && 
                        <Card newStyles={styles.selectedCard}>
                            <Text style={{color: colors.primary}}> Your number is: </Text> 
                            <Text style={styles.yourNumber}> {selectedNumber} </Text>
                            <View style={styles.buttonConfirm}>
                                <Pressable onPress={() => onStartGame(selectedNumber)}>
                                    <Text style={styles.buttonText}>Start Game</Text>
                                </Pressable>
                            </View>
                        </Card>
                    }   
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: colors.terciary,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    buttonClear: {
        backgroundColor: colors.disable,
        height: 35,
        width: 90,
        padding: 8,
        alignItems: 'center',
        borderRadius: 10,
        margin: 1
    },
    buttonConfirm: {
        backgroundColor: colors.secondary,
        height: 35,
        minWidth: 90,
        padding: 8,
        alignItems: 'center',
        borderRadius: 10,
        margin: 1
    },
    buttonText: {
        color: colors.terciary,
        fontSize: 15,
        letterSpacing: .5,
        lineHeight: 20,
    },
    selectedCard: {
        marginTop: 50,
        borderRadius: 15,
        width: '60%'
    },
    yourNumber: {
        fontSize: 30,
        fontWeight: '700',
        marginVertical: 10
    }
})