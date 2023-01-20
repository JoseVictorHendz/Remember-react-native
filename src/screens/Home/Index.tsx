import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {

    const participants = ["jose", "joao", "pedro", "rodrigo", "cleberton", "vitor", "giovana", "samela", "teu pai de calcinha", "60NoMeuSOfa", "batatinha"]

    function handleParticiopantAdd(name: string) {
        if(participants.includes(name)) {
            return Alert.alert("Participante Existe", `Ja existe um participante com o nome de ${name} na lista`)
        }
    }

    function handleParticiopantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!")
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
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={() => handleParticiopantAdd("jose")}>
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