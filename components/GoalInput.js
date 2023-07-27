import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                placeholder="Tu camino a la meta!!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Añadir meta" onPress={addGoalHandler} />
        </View>

    );
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'slategray',
    },
    inputText: {
        borderWidth: 1,
        borderColor: 'slategray',
        marginRight: 8,
        padding: 8,
        width: '70%',
        flexDirection: 'column',
        borderRadius: 3,

    },
});

