import React from 'react'

function NavbarItem(props){
    return(
        <li className="nav-item active">
        <a className="nav-link" href={`${props.elemento.url}`}>{props.elemento.txt} <span className="sr-only">(current)</span></a>
        </li>
    )
}

export default NavbarItem