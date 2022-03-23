import React from 'react'
import {
    Text,
    SafeAreaView,
    StatusBar,
    FlatList
} from 'react-native'

import Item from './itens'

const services = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÂO Dê BANHO NO SEU GATO! Mas se precisar nós damos!"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco:89.9,
        descricao: "Uma dose da Vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco:99.9,
        descricao: "Uma dose da vacina. Seu gato precisa de uma dose por ano!"
    },
]

export default function Services(){
    return (
        <SafeAreaView>
            <StatusBar/>
            <Text>Serviços!</Text>
            <FlatList
                data={services}
                renderItem={({item})=> <Item { ...item} />}
                keyExtractor={({id})=> String(id)}
            />
        </SafeAreaView>
    )
}