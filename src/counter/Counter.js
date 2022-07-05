import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Counter({ count, incrementCount, decrementCount }) {

    return (
        <View style={styles.container}>
            <Text testID='increment' style={styles.counterButton} onPress={incrementCount}>
                Increment
            </Text>
            <Text style={styles.counter}>{count}</Text>
            <Text testID='decrement' style={styles.counterButton} onPress={decrementCount}>
                Decrement
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterButton: {
        backgroundColor: '#000',
        color: '#fff',
        padding: 10,
        borderRadius: 5
    },
    counter: {
        fontSize: 20,
        color: '#000',
        margin: 5
    }
})