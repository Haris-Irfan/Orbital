import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SignUpForm() {
    const [click, setClick] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
}