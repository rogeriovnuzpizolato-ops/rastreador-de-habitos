const dataHoje= document.getElementById("data-hoje");

function mostrarHora(){
    const data= new Date();
    const dataFormada= {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const dataCompleta= data.toLocaleDateString("pt-br", dataFormada);

    dataHoje.innerHTML= dataCompleta;

    setInterval(mostrarHora,1000);
}
mostrarHora()