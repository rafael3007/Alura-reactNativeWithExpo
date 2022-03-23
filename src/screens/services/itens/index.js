import React, { useState } from "react";

import { 
    Button,
    Text,
    View
} from "react-native"
import ItemDeLista from "../../../components/ItemDeLista";

import estilos from './styles'

export default function Item({nome, preco, descricao}) {
    const [quantidade,setQuantidade] = useState(1);
    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{ nome }</Text>
                <Text style={estilos.descricao}>{ descricao }</Text>  
                <Text style={estilos.preco}>{ preco }</Text>        
            </View>
            <View style={estilos.carrinho}>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <ItemDeLista valor={quantidade} acao={setQuantidade}/>
                </View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <Text style={estilos.preco}>0</Text>
                </View>
                <Button title="Adicionar" />
            </View>
            <View style={estilos.divisor} />
        </>
    )
}