import { StatusBar } from "expo-status-bar";
import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            {/*TODO: Create custom button with TouchableOpacity */}
            <View style={styles.loginButton}>
                <Button title="Login" onPress={() => Alert.alert("login clicked")} color="#f194ff" />
            </View>
            <View style={styles.joinButton}>
                <Button title="Join" onPress={() => Alert.alert("join clicked")} color="#000" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: 'red',
        width: '80%',
        margin: 10,
        height: 60,
    },
    joinButton: {
        backgroundColor: 'blue',
        width: '80%',
        margin: 10,
        height: 60,
    }
})

export default LoginScreen;