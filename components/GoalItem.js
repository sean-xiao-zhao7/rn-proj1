import { Text, View, StyleSheet } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{props.goal}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 10,
        backgroundColor: "whitesmoke",
    },
    goalItemText: {
        fontSize: 20,
    },
});
