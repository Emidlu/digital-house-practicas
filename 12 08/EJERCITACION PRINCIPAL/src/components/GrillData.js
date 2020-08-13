import React from 'react'
import GrillFila from './GrillFila'

let data1 = {name: 'Tiger Nixon', description: 'System Architect', price: 320.800, categories: ['Category 01','Category 02','Category 03'], colors: ['Red', 'Blue', 'Green'], stock: 245}
let data2 = {name: 'Jane Doe', description: 'Fullstack developer', price: 320.800, categories: ['Category 01','Category 02','Category 03'], colors: ['Red', 'Blue', 'Green'], stock: 245}


let datas = [data1, data2]

function GrillData(){
    return(
        <>
        {datas.map((value, i)=>
        <GrillFila key={i} data = {value}/>
        )}
        </>
    )
}

export default GrillData