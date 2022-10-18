import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import api from '../api';

const Logout = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            const logout = async () => {
                const token = await AsyncStorage.removeItem("token");
                navigation.navigate("Login");
            }
            logout();
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator color="red" size={45} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Logout