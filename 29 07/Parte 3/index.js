window.onload = function () {

    function daleGif() {
        fetch("https://api.giphy.com/v1/gifs/random?api_key=eShnsefJz3WGXCkcrXFRhjcSx1nRAbLx&tag=&rating=g")
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (info) {
                console.log(info.data)

                let url = info.data.images.original.url;
                let nombre = info.data.title;
                if(nombre == ''){
                    nombre = 'Gif animado';
                }

                document.querySelector("h1").innerHTML = nombre;
                document.getElementById("imagen").src = url;





            })
            .catch(function (e) {
                alert("Error");
            })
    }

    
    document.querySelector("button").addEventListener('click', () => {
        daleGif()
            .then(() => {
                let container = document.getElementById("p");
                let content = container.innerHTML;
                container.innerHTML = content;
            })

    })
    daleGif();

}