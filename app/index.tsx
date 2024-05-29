import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginForm() {
    const [click, setClick] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ImageBackground source={require("../assets/images/VI-SG-IT-UIbackground.png")} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <FontAwesome6 name='landmark-dome' style={styles.icon} size={60} />
                <Text style={styles.title}>VI-SG-IT!</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder='EMAIL OR USERNAME'
                        value={username}
                        onChangeText={setUsername}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='PASSWORD'
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.rememberView}>
                    <View style={styles.switch}>
                        <Switch value={click} onValueChange={setClick} trackColor={{ true: "red", false: "blue" }} />
                        <Text style={styles.rememberText}>Remember Me</Text>
                    </View>
                    <View>
                        <Pressable onPress={() => Alert.alert("Forget Password!")}>
                            <Text style={styles.forgetText}>Forgot Password?</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.buttonView}>
                    <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfully!")}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Pressable>
                    <Text style={styles.optionsText}>OR LOGIN WITH</Text>
                </View>

                <View style={styles.mediaIcons}>
                    <FontAwesome name='facebook-square' size={40} style={styles.icons} />
                    <FontAwesome name='google' size={40} style={styles.icons} />
                </View>

                <Text style={styles.footerText}>Don't Have an Account?<Text style={styles.signup}>  Sign Up</Text></Text>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    icon: {
        marginTop: 70,
        marginBottom: -20,
        color: 'maroon',
    },
    image: {
        height: 160,
        width: 170,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 40,
        color: "maroon",
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "maroon",
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: '#fff', // White background for inputs
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 8,
        marginBottom: 15,
    },
    switch: {
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    rememberText: {
        fontSize: 13,
        color: "white",
    },
    forgetText: {
        fontSize: 11,
        color: "white",
    },
    button: {
        backgroundColor: "maroon",
        height: 45,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50,
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "white",
        fontSize: 13,
        marginTop: 3,
        marginBottom: 3,
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23,
    },
    icons: {
        color: 'darkblue',
    },
    footerText: {
        textAlign: "center",
        color: "white",
    },
    signup: {
        color: "maroon",
        fontSize: 13,
    },
});
