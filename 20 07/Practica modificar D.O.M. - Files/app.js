let bienvenidos = alert('Bienvenidos a mi sitio');

let confirmacion = confirm('Esta seguro de que desea avanzar?');



if (confirmacion === true) {
    document.querySelector('h2').innerHTML = 'Que alegria que quieras con tu visita por este maravilloso sitio.';
    let nombre = prompt('Ingrese su nombre');
    document.querySelector('h1').innerHTML = 'Bienvenido ' + `<span>${nombre}</span>`;

} else {
    document.querySelector('h2').innerHTML = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio'
}

let edad = prompt('Que edad tenes?');
if (edad < 18) {
    document.querySelector('.container-general').classList.toggle('contenido-bloqueado');
    document.getElementById('accesoDenegado').classList.toggle('contenido-bloqueado');

}

let hobbiesString = prompt('Ingrese sus hobbies separados por coma');
let hobbies = hobbiesString.split(",");

if((hobbies.indexOf("programacion")!=-1) || (hobbies.indexOf("programar")!=-1)||(hobbies.indexOf("Programacion")!=-1) || (hobbies.indexOf("Programar")!=-1)){
    alert('Qué bueno que te guste la programación.')
}else{alert('Qué lástima que no te guste la programación')
    document.querySelector('.background-img').classList.toggle('background-img')
}



if(hobbies.length >= 3){
    document.getElementsByClassName('hobbie')[0].innerHTML=hobbies[0],
    document.getElementsByClassName('hobbie')[1].innerHTML=hobbies[1],
    document.getElementsByClassName('hobbie')[2].innerHTML=hobbies[2]
}else{document.querySelector('.hobbies').classList.toggle('contenido-bloqueado');}

let colorPreferido = prompt('Ingrese su color favorito');
 console.log(colorPreferido);

document.getElementsByTagName('span')[1].style.color = colorPreferido;

