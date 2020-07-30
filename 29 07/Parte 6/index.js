window.onload = function () {
    let cant = prompt('Cuantos gifs desea ver?')

    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=eShnsefJz3WGXCkcrXFRhjcSx1nRAbLx&limit=${cant}&rating=g`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (info) {
            console.log(info.data)


            if (cant>25){
                cant = 25;
            }

            let titulos;
            for (let i = 0; i < info.data.length; i++) {
                titulos = info.data[i].title;
                let gif = "<p>" + info.data[i].title + "</p>"
                gif += "<img src=" + info.data[i].images.original.url + ">"

                document.querySelector("ul").innerHTML += "<li>" + gif + `<div class="estrellas"><i id="${info.data[i].title}" class="far fa-star fa-lg"></i></div>` + "</li>"
                
            }
            let estrellas = document.querySelectorAll(".estrellas");
            
            for (let i = 0; i < info.data.length; i++) {
            estrellas[i].addEventListener('click',()=>{
                alert('hola');
            })
        } 

        })
        .catch(function (e) {
            alert("Error");
        })



}