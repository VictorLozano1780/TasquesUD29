function ejercicio11() {
    var resultado = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < 36000; i++) {
        var tiro = Math.random() * 6;
        var tiro2 = Math.random() * 6;
        var suma = Math.round(tiro) + Math.round(tiro2);
        resultado[suma] = resultado[suma] + 1;
    }
    console.log("Resultado 2 = " + resultado[0]);
    console.log("Resultado 3 = " + resultado[1]);
    console.log("Resultado 4 = " + resultado[2]);
    console.log("Resultado 5 = " + resultado[3]);
    console.log("Resultado 6 = " + resultado[4]);
    console.log("Resultado 7 = " + resultado[5]);
    console.log("Resultado 8 = " + resultado[6]);
    console.log("Resultado 9 = " + resultado[7]);
    console.log("Resultado 10 = " + resultado[8]);
    console.log("Resultado 11 = " + resultado[9]);
    console.log("Resultado 12 = " + resultado[10]);
}

function ejercicio12() {
    var fecha = prompt("Inserta una fecha");
    var vregex = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
}

function clickTabla1() {
    alert("Se presionó un párrafo del documento");
}

function clickTabla2() {
    alert("Se presionó un párrafo contenido en la segunda tabla");
}