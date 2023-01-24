import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Card = ({ newStyles, children }) => {
    return <View style={{...styles.container, ...newStyles}}>
        {children}
    </View>
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: colors.terciary,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: .3,
        elevation: 20,
        backgroundColor: colors.terciary,
    },
})