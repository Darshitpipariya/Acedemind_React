import { View, StyleSheet, Button, TextInput, Modal } from 'react-native'
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
        props.closeOverlayView();
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} value={enteredGoal} onChangeText={handleTextCange} inputMode='text' placeholder='Your course goal' />
                {/* passing child state to parent using functional propertie which takes child state as arg for that we will create function to pass state
                here we have created addGoal function
            */}
                <View style={styles.buttenContainer}>
                    <View style={{marginRight:10}}>
                        <Button title='Add goal' onPress={addGoal} />
                    </View>
                    <View >
                        <Button title='Close' onPress={props.closeOverlayView} /> 
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderRadius: 5,
        borderColor: "#cccccc",
        borderWidth: 2,
        margin: 20,
        padding: 8,
        width: "90%"
    },
    buttenContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
    }
});