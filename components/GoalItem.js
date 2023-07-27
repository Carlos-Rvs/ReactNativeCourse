import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {

    return (
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>);
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#00389e',
        borderRadius: 5,
        margin: 5,
        padding: 5,

    },
    goalText: {
        color: 'white',
    },
});