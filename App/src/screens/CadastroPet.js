import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
 
const CadastroPet = ({navigation}) => {
    const [Raca, setRaca] = useState('');
    const [Nome, setNome] = useState('');
    const [Idade, setIdade] = useState('');
    const [Sexo, setSexo] = useState('');
    const [Porte, setPorte] = useState('');


    const { height } = useWindowDimensions();
    const onRegisterPressedPetWalker = () => {
       
    }
    

    return (
        <View style={styles.view}>
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

            <CustomButton text="Register" onPress={onRegisterPressedPetWalker} />
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