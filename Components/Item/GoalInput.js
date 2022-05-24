import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert
    } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const showAlert = () =>
    Alert.alert(
        "Error",
        "Goal Empty!",
    );
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Write task"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            /> 
            {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
            <TouchableOpacity style={styles.button} onPress={(enteredGoal) ? props.onAddGoal.bind(this, enteredGoal) : showAlert}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        color: 'black',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 30,
        padding: 10
    },
    button: {
        backgroundColor: "#FFFFFF",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        
    },
    plus: {
        fontSize: 35,
        color: '#C0C0C0'
    }
});

export default GoalInput;