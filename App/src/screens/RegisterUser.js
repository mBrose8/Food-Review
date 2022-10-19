import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
 
const RegisterUser = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CPF, setCpf] = useState('');
    const [Endereco, setEndereco] = useState('');

    const { height } = useWindowDimensions();
 
    const onRegisterPressed = () => {
        alert("Registered User " + name + " and " + password + " and " + email + " and " + admin);
    }
 
    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
 
            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
            />
 
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
 
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomInput
                placeholder="CPF"
                value={CPF}
                setValue={setCpf}
            />

            <CustomInput
                placeholder="Endereco"
                value={Endereco}
                setValue={setEndereco}
            />

 
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <CustomButton text="Voltar" onPress={() => navigation.navigate("Logout")} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text>
                    Já tem uma conta?{" "}
                    <Text style={styles.loginText}>Faça o login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#d4e0ff"
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
      fontWeight: "bold",
      color: "#6200ee",
    },
});
 
export default RegisterUser;