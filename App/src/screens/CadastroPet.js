import { StyleSheet, Text, ScrollView, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from '../api'
import { Context } from "../context/authContext";

const CadastroPet = ({ navigation }) => {
    const {state, dispatch} = useContext(Context)
    const [Raca, setRaca] = useState('');
    const [Nome, setNome] = useState('');
    const [Idade, setIdade] = useState('');
    const [Sexo, setSexo] = useState('');
    const [Porte, setPorte] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressedPet = async () => {
        try {
            const data = await api.post('/user/dogs', {
                Raca: Raca,
                Nome: Nome,
                Idade: Idade,
                Sexo: Sexo,
                Porte: Porte,
                idUser: state.idUser
            });

            if (data.status === 200) {
                console.log(data)
            } else {
                console.log(data)
            }
        } catch (err) {
            console.log(err)
        }
    }


return (
    <ScrollView style={styles.view}>
        <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
        />

        <CustomInput
            placeholder="Raca"
            value={Raca}
            setValue={setRaca}
        />
        <CustomInput
            placeholder="Nome"
            value={Nome}
            setValue={setNome}
        />
        <CustomInput
            placeholder="Idade"
            value={Idade}
            setValue={setIdade}
        />
        <CustomInput
            placeholder="Sexo"
            value={Sexo}
            setValue={setSexo}
        />
        <CustomInput
            placeholder="Porte"
            value={Porte}
            setValue={setPorte}
        />

        <CustomButton text="Register" onPress={onRegisterPressedPet} />

        <CustomButton text="Voltar" onPress={() => navigation.navigate("Home")} />
    </ScrollView>
)
};


const styles = StyleSheet.create({
    view: {
        padding: 20,
        backgroundColor: "#d4e0ff",

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        margin: 'auto'
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
    },
});

export default CadastroPet;