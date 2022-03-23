import React from 'react'

import {
    TextInput,
} from 'react-native'

export default function ItemDeLista({valor,acao}) {

    const numStr = String(valor)
    return(
        <TextInput
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(value)=>{acao(value)}}
            value={numStr}
        />
    )
}
