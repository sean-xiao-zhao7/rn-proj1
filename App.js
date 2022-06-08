import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    FlatList,
} from "react-native";

export default function App() {
    const [text, setText] = useState("");
    const [goals, setGoals] = useState([]);
    const inputChangeHandler = (text) => {
        setText(text);
    };
    const addGoalHandler = (e) => {
        setGoals((prevGoals) => {
            return [...prevGoals, text];
        });
        setText("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter a goal"
                onChangeText={inputChangeHandler}
                value={text}
            />
            <Button onPress={addGoalHandler} title="Add" />
            <FlatList
                data={goals}
                renderItem={(item) => <Text>{item.item}</Text>}
                keyExtractor={(item) => item.item + Math.random().toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
});
