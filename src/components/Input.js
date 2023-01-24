import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Input = ({ newStyle, ...restProps }) => {
    return (
        <TextInput style={{...styles.input, ...newStyle}} {...restProps}/>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '85%',
        backgroundColor: '#efecec',
        marginVertical: 10,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,

        shadowColor: colors.primary,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 10,
    }
})