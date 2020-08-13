import React from 'react';
import NavbarItem from './NavbarItem'

let element1 = {url: '#', txt: 'Home'}
let element2 = {url: '#', txt: 'Features'}
let element3 = {url: '#', txt: 'Pricing'}

let elementos = [element1, element2, element3]

function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        {elementos.map((element) =>
        <NavbarItem elemento={element}/>
        )}
    </ul>
  </div>
</nav>
    )
}


export default Navbar