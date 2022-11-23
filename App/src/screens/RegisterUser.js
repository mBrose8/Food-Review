import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, Picker } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../api";

 
const RegisterUser = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CPF, setCPF] = useState('');
    const [Endereco, setEndereco] = useState('');
    const [admin, setAdmin] = useState(false);

    const { height } = useWindowDimensions();
 
    const onRegisterPressed = async () => {
        try {
            const data = await api.post('/user/register', {
                name: name,
                email: email,
                password: password,
                cpf: CPF,
                endereco: Endereco,
                admin: admin
            });
            if(data.status === 200){
                console.log(data)
                alert(data.data.message)
            } else {
                console.log(data)
            }
        } catch (err) {
            console.log(err)
        }
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
                setValue={setCPF}
            />

            <CustomInput
                placeholder="Endereco Completo"
                value={Endereco}
                setValue={setEndereco}
            />
                        <Picker
                selectedValue={admin}
                style={styles.picker}
                onValueChange={setAdmin}
            >
                <Picker.Item label="Admin User" value="true" />
                <Picker.Item label="Regular User" value="false" />
            </Picker>

 
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <CustomButton text="Voltar" onPress={() => navigation.navigate("Login")} />
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