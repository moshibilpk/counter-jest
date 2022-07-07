
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import React from 'react'

type PropsType = {|
    onPress?: () => Promise <void> | void,
    title: string | Element <typeof Text>,
  |};

const Button = ({ buttonName, onPress }:PropsType): Element<typeof TouchableHighlight>  => {
    return (
        <TouchableHighlight style={styles.counterButton} onPress={onPress}>
            <Text style={styles.labelStyle}>{buttonName}</Text>
        </TouchableHighlight>
    )
}

export default Button

const styles = StyleSheet.create({
    counterButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5
    },
    labelStyle: {
        color: '#fff'
    }
})

