window.onload = function () {
    
    let query = new URLSearchParams(location.search);
    let valor = query.get('busquedaGif');
    let cant = query.get('cant');
    
    if(valor){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=eShnsefJz3WGXCkcrXFRhjcSx1nRAbLx&q=${valor}&limit=${cant}&offset=0&rating=g&lang=en`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (info) {
            console.log(info.data)

            for (let i = 0; i < info.data.length; i++) {
                let gif = "<p>" + info.data[i].title + "</p>"
                gif += "<img src=" + info.data[i].images.original.url + ">"

                document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"
            }
            
            document.querySelector("h1").innerHTML = `Resultados de búsqueda para: ${valor}.`

            

        })
        .catch(function (e) {
            alert("Error");
        })
    }


}