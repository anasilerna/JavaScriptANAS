function cambiarColor() {
    const colores = ["red", "blue", "green", "yellow", "purple"];
    const indice = Math.Floor(Math.random() * colores.length; 
    document.body.style.backgroundColor = colores[indice];
}
