let listaCard=[
    {
        id:1,
        nombre:"TECFIL Filtro hidraulico DSF0202",
        precio:184,
        envio:"Envío gratis",
        imagen:"https://autopartes.pe/data/productos/filtro-hidraulico-tecfil-dsf0202-2361-g.jpg",
        descripcion:"TECFIL Filtro hidraulico DSF0202"
    },
    {
        id:2,
        nombre:"Tratamiento para transmision automatica Wynn's 64506",
        precio:184,
        envio:"Envío gratis",
        imagen:"https://autopartes.pe/data/productos/tratamiento-para-transmision-automatica-wynns-64506-2897-g.jpg",
        descripcion:"Tratamiento para transmision automatica Wynn's 64506"
    },
    {
        id:3,
        nombre:"Batería ACDELCO S95D31LHD",
        precio:184,
        envio:"Envío gratis",
        imagen:"https://autopartes.pe/data/productos/bateria-ac-delco-s95d31lhd-3350-g.jpg",
        descripcion:"Batería ACDELCO S95D31LHD"
    },
    {
        id:4,
        nombre:"FARO SEMISELLADO 6014-S",
        precio:184,
        envio:"Envío gratis",
        imagen:"https://autopartes.pe/data/productos/faro-semisellado-6014-s-3445-g.png",
        descripcion:"FARO SEMISELLADO 6014-S"
    }
];

let divContenido = document.getElementById("card");


function printCard () {
    let htmlCard="";
    listaCard.forEach(function(cardview){
        htmlCard=htmlCard+
        `<div class="row">
            
                <div class="carousel slide" data-bs-ride="carousel">
                <div class="col-12 oscuro">
                    <div class="card">
                            <div class="card-body">
                                <div class="tarjeta">
                                <img src="${cardview.imagen}" class="card-img-top" alt="">               
                                </div>
                                <div class="txtprecio">
                                <span>S/. ${cardview.precio}</span>
                                </div>
                                <div class="txtEnvio">
                                <p>${cardview.envio}</p>
                                </div>
                                <div class="ocultodesc">
                                ${cardview.descripcion}
                                </div>
                            </div>
                    </div>  
                    </div>
                </div>
            
        </div>`  
    })

    divContenido.innerHTML=htmlCard;    

}
printCard()