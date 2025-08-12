import { TouchableOpacity, Text } from "react-native";
import { styles } from '../styles';

import { GestureResponderEvent } from "react-native";

type ButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
};

export function Button({ onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}>Clique aqui</Text>
        </TouchableOpacity>
    );
}