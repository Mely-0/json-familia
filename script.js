const div = document.querySelector('#tarjetas');
console.log(div);
async function ObtenerDatos() {

    const response = await fetch("http://127.0.0.1:5500/familia.json");
    let json = await response.json();

    console.log(json);



    json.familia.forEach(element => {

        div.innerHTML += '<div class="contenedor-tarjeta"> <img src='+element.url+'><h3> Parentesco: ' + element.parentesco + ' </h3> <br> <span> Apellidos:' + element.Apellidos + '<br> <span> Nombres: ' + element.Nombres + ' <br> Edad: '+ element.edad +' <br> </span> </div> ';




    });


}

ObtenerDatos();