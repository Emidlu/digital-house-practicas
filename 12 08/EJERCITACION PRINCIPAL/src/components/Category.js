import React from 'react'

function Category(props){
    return(
        props.cant.map((unidad, i) =>
        <div className="col-lg-6 mb-4" key={unidad + i}>
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    Category {unidad}
                </div>
            </div>
        </div>
        )
    )
}

export default Category