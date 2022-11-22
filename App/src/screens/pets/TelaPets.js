import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/authContext'
import api from '../../api'
import { Entypo } from '@expo/vector-icons'
import CustomButton from '../../components/CustomButton'

const TelaPets = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [pets, setPets] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/user/findpet', {
              params: {
                idUser: state.idUser
              }
            });
            setPets(list.data.pets)
        }
        onScreenLoad();
    }, [state.update]
    )



    return (
        <View style={styles.view}>
            
            <FlatList
                data={Dogs}
              renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeReview(item)}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.item}>{item.raca}</Text>
                                    <Text style={styles.item}>{item.sexo}</Text>
                                    <Text style={styles.item}>{item.idade}</Text>
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
