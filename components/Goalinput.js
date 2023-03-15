import { View, StyleSheet, Button, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Goalinput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    function handleTextCange(enteredText) {
        setEnteredGoal(enteredText);
    }
    function addGoal() {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} value={enteredGoal} onChangeText={handleTextCange} inputMode='text' placeholder='Your course goal' />
            {/* passing child state to parent using functional propertie which takes child state as arg for that we will create function to pass state
                here we have created addGoal function
            */}
            <Button title='Add goal' onPress={addGoal} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 18,
        borderBottomColor: "#111111",
        borderBottomWidth: 1
    },
    textInput: {
        borderRadius: 5,
        borderColor: "#cccccc",
        borderWidth: 2,
        margin: 20,
        padding: 8,
        width: "100%"
    },
});