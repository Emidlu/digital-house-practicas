import React from 'react'
import Box from './Box'

function ContentRow(){
    return(
        <div className="row">

            <Box clase="card border-left-primary shadow h-100 py-2" icono="fas fa-clipboard-list fa-2x text-gray-300" valor="135" claseTexto="text-xs font-weight-bold text-primary text-uppercase mb-1" texto="PRODUCTS IN DATA BASE"/>
            <Box clase="card border-left-success shadow h-100 py-2" icono="fas fa-dollar-sign fa-2x text-gray-300" valor="$546.456" claseTexto="text-xs font-weight-bold text-success text-uppercase mb-1" texto="AMOUNT IN PRODUCTS"/>
            <Box clase="card border-left-warning shadow h-100 py-2" icono="fas fa-user-check fa-2x text-gray-300" valor="38" claseTexto="text-xs font-weight-bold text-warning text-uppercase mb-1" texto="USERS QUANTITY"/>

            
        </div>

    )
}

export default ContentRow