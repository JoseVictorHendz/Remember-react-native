import React, { useState } from "react"

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantsName, setParticipantsName] = useState('');

    function handleParticiopantAdd() {
        if(participants.includes(participantsName)) {
            return Alert.alert("Participante Existe", `Ja existe um participante com o nome de ${participantsName} na lista`)
        }

        setParticipants(prevState => [...prevState, participantsName]);
        setParticipantsName('');
    }

    function handleParticiopantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Nao",
                style: "cancel"
            }
        ])
    }

  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do evento
        </Text>

        <Text style={styles.eventDate}>
            Quinta, 19 de janeiro de 2023
        </Text> 

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
                onChangeText={setParticipantsName}
                value={participantsName}
            />

            <TouchableOpacity style={styles.button} onPress={() => handleParticiopantAdd()}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
        <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                key={item}
                name={item} 
                onRemove={() => handleParticiopantRemove(item)} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmpity}>
                    Ainda nao temos particioantes :(, adicione alguns na sua lista de presenca!
                </Text>
            )}
        />
    </View>
  )
}