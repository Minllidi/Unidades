function linkgenerado(){
    //Generar un numero aleatorio
    let id =Math.round(Math.random() * 100);
    return`https://picsum.photos/id/${id}/info`; 
}


//Manipulacion al DOM = HTML
function abc(data){
    let div = $("<div></div>");
    //Agregar clase addClass
    div.addClass("card");

    let img = $("<img></img>");
    //Agregar clase addClas
    img.addClass("card-img")

    img.attr("src",data.download_url);

    div.append(img);

    let autor = $("<h3></h3>");
    autor.addClass("card-title");
    autor.append(data.author);
    
    div.append(autor);

    let ari = $("<h3></h3>");
    ari.addClass("card-title2");
    ari.append(data.id);

    div.append(ari);

    let game = $("<h3></h3>");
    game.addClass("card-title3");
    game.append(data.url);

    div.append(game);

    $('#imagenes-contenedor').append(div);
}

function getPic(){
    //Consumir API
    $.ajax({
        type: 'GET',
        url: linkgenerado(),
        dataType: "json",
        async: true,
        success: function(data){abc(data)},
    });
}

$(document).ready( function(){
    //Bucle que imprima en la consola un texto 9 veces
    for (let i = 0; i < 9; i++) {
        getPic();
    }
});