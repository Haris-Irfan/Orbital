import { View, StyleSheet } from "react-native";
import Directory from "./screens/directory";

export default function DirectoryPage() {
    return (
        <View style={style.background}>
            < Directory/>
        </View>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    }
});