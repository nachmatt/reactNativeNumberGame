import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ title, newStyles }) => {
    return (
        <View style={styles.header}>
            <Text style={{...styles.headerTitle, ...newStyles}}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'salmon',
        height: 100,
        paddingTop: 30,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 30,
    }
})