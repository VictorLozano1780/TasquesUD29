function ponerGrande(imagen) {
    var src = 'imagenes/' + imagen;
    var imagenGrande = document.getElementById("grande");
    console.log(src);
    imagenGrande.style.backgroundImage = "url(" + src + ")";
}