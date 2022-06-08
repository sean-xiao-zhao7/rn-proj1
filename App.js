import { useState } from "react";
import { StyleSheet, View, Button, Modal, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [text, setText] = useState("");
    const [goals, setGoals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const inputChangeHandler = (text) => {
        setText(text);
    };

    const addGoalHandler = (e) => {
        setGoals((prevGoals) => {
            return [...prevGoals, text];
        });
        setText("");
        setModalVisible(false);
    };

    const openModalHandler = () => {
        setModalVisible(true);
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <Button onPress={openModalHandler} title={"Add a new goal"} />
                <Modal
                    visible={modalVisible}
                    animationType={"slide"}
                    styles={styles.modal}
                >
                    <GoalInput
                        inputChangeHandler={inputChangeHandler}
                        text={text}
                    />
                    <Button onPress={addGoalHandler} title="Add" />
                </Modal>
                <FlatList
                    data={goals}
                    renderItem={(item) => <GoalItem goal={item.item} />}
                    keyExtractor={(item) =>
                        item.item + Math.random().toString()
                    }
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 150,
        justifyContent: "center",
        flex: 1,
    },
    modal: { paddingTop: 100 },
});
