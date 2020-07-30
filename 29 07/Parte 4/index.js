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
            for (let i = 0; i < info.data.length; i++) {
                let gif = "<p>" + info.data[i].title + "</p>"
                gif += "<img src=" + info.data[i].images.original.url + ">"

                document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"
            }

        })
        .catch(function (e) {
            alert("Error");
        })



}