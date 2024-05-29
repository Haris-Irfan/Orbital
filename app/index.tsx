import { StyleSheet, View } from "react-native";
import LoginForm from "./screens/login_page";

export default function Index() {
    return (
        <View style={styles.container}>
            <LoginForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});