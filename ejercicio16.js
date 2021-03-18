window.onload(cambiarHora());

function cambiarHora() {
    setInterval(cambiarHora, 1000);
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var resultado = hora + " : " + minutos + " : " + segundos;
    document.getElementById("reloj").innerHTML = resultado;
}