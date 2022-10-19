import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
 
const CadastroPet = ({navigation}) => {
    const [Email, setEmail] = useState('');
    const [Nome, setNome] = useState('');
    const [Telefone, setTelefone] = useState('');


    const { height } = useWindowDimensions();
 
    const onRegisterPressed = () => {}

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
 
            <CustomInput
                placeholder="Email"
                value={Email}
                setValue={setEmail}
            />
             <CustomInput
                placeholder="Nome"
                value={Nome}
                setValue={setNome}
            />
            <CustomInput
                placeholder="Telefone"
                value={Telefone}
                setValue={setTelefone}
            />
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <CustomButton text="Voltar" onPress={() => navigation.navigate("Home")} />


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
 
export default CadastroPet;