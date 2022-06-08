import { TextInput } from "react-native";

export default function GoalInput(props) {
    return (
        <TextInput
            placeholder="Enter a goal"
            onChangeText={props.inputChangeHandler}
            value={props.text}
        />
    );
}
