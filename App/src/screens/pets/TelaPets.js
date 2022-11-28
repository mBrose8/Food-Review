import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/authContext'
import api from '../../api'
import { Entypo } from '@expo/vector-icons'
import CustomButton from '../../components/CustomButton'

const TelaPets = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    const [update, setUpdate] = useState(false)
    const [pets, setPets] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/user/findpet', {
              params: {
                idUser: state.idUser
              }
            });
            console.log(list)
            setPets(list.data)
        }
        onScreenLoad();
    }, [update]
    )

    const deletarPet = async (id) => {
        await api.post('/user/delete', {
            id: id
        })
        setUpdate(true)
    }

    return (
        <View style={styles.view}>
            
            <FlatList
                data={pets}
              renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeReview(item)}>
                                    <Text style={styles.title}>Nome: {item.Nome}</Text>
                                    <Text style={styles.item}>Raça: {item.Raca}</Text>
                                    <Text style={styles.item}>Genero: {item.Sexo}</Text>
                                    <Text style={styles.item}>Idade: {item.Idade}</Text>
                                    <Button color="red" title="Remover Pet" onPress={() => deletarPet(item.id)} />

                            </TouchableOpacity>
                        
                        </View>
                    )
                }
              }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default TelaPets

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        marginBottom: 20
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '80%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30
    },
    item: {
        fontSize: 15
    },
    icon: {
        margin: 0
    }
})
