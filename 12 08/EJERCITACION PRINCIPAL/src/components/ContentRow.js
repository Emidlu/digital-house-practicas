import React from 'react'
import Box from './Box'

let caja1 = {borde:'border-left-primary', icono:"clipboard-list", cifra:135, claseTexto:"text-primary", titulo:"PRODUCTS IN DATA BASE"}
let caja2 = {borde:"border-left-success", icono:"dollar-sign", cifra:546.456, claseTexto:"text-success", titulo:"AMOUNT IN PRODUCTS"}
let caja3 = {borde:"border-left-warning", icono:"user-check", cifra:38, claseTexto:"text-warning", titulo:"USERS QUANTITY"}

let cajas = [caja1, caja2, caja3]

function ContentRow(){
    return(
        <div className="row">
            {cajas.map((valor, i)=>
                <Box boxes={valor} key={i}/>
            )}
            
            
        </div>

    )
}

export default ContentRow