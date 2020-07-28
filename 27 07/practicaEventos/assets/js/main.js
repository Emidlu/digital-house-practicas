window.onload = () => {

    let abracadabra = document.querySelector('#abracadabra');
    abracadabra.addEventListener('click', () => {
        let nombre = prompt('Ingrese su nombre');
        document.querySelector("#titular strong").innerHTML = nombre;
    })


    function colorAlAzar() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let numero = getRandomInt(0, 4);
        colores = ["red", "blue", "yellow", "pink", "violet"];
        return colores[numero];
    }

    let getInTouch = document.querySelector('#getInTouch');
    getInTouch.addEventListener('dblclick', () => {


        document.querySelector(".parrafo-color").style.color = colorAlAzar();

    })

    let boxStyle1 = document.querySelectorAll('.box.style1');
    let boxStyle1H3 = document.querySelectorAll('.box.style1 h3');

    for (let i = 0; i < 3; i++) {
        boxStyle1[i].addEventListener('click', () => {
            let etiquetaH = boxStyle1H3[i].innerHTML;
            alert(`clickeaste sobre ${etiquetaH}`);
        })
    }

    let seeSome = document.querySelector('#seeSome');
    let parrafoSeeSome = document.querySelector('.parrafoSeeSome');
    seeSome.addEventListener('mouseover', () => {
        parrafoSeeSome.style.color = colorAlAzar();

    })
    seeSome.addEventListener('mouseout', () => {
        parrafoSeeSome.style.color = '#888';
    })

    let lechuza = document.querySelector('#lechuza');
    lechuza.addEventListener('click', () => {
        alert(`Preparate para el futuro...`);
        setTimeout(() => {
            alert('el futuro es hoy, oiste viejo?')
        }, 5000)
    })

    let email = document.querySelector('#email');
    email.addEventListener('keypress', (e) => {
        if (e.key == " ") {
            alert('Ey, tocaste la barra!')
            e.preventDefault();
        }
    })

    let estado = 0;
    secreto = 'secret';
    secretoMayus = 'SECRET';


    let flag = false;
    document.addEventListener('keypress', (e) => {
        let flag = false;
        for (var i = 0; i < 6; i++) {
            if (((e.key == secreto[i]) || (e.key == secretoMayus[i])) && estado == i) {
                estado = i + 1;
                console.log(estado);
                flag = true;
            }
            if (estado == 6) {
                alert('SECRETO MAGICO')
                estado = 0;
            }
        }
        if (flag == false) {
            estado = 0;
            console.log(estado);
        }
    })


    let n = Math.floor(Math.random()*5);
    let boxStyle2 = document.querySelectorAll('.box.style2');

    for (let i = 0; i < 5; i++) {
        boxStyle2[i].addEventListener('click', () => {
            if(n == i){
            alert(`Ganaste heroe`);
            }
        })
    }



}