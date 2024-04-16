let bt_aceptar = document.querySelectorAll("#botonA");
let bt_rechazar = document.querySelectorAll("#botonR");
let cont=document.getElementById("tsoli");
let contnex= 2;
let sconta=500;
bt_aceptar.forEach(function(node){
    console.log(node);
    node.addEventListener("click",function(){
        sconta++;
        contnex--;
        document.getElementById("tconex").innerHTML = " Tus Conexiones ("+sconta+"+)";
        node.parentElement.remove();
        cont.innerHTML="Solicitudes de conexion ("+contnex+")";
        });
});
bt_rechazar.forEach(function(node){
    node.addEventListener("click",function(){
        contnex--;
        document.getElementById("titusoli").innerHTML = "Solicitudes de conexion ("+contnex+")";
        node.parentElement.remove();
    });
});
let titulo = document.getElementById("nmm");
let btn = document.getElementById("btt");
btn.addEventListener("click",function () {
    titulo.innerHTML="Adrian M"
    var cambiarimg = "perfil.png";
    document.getElementById("imagen_actual").setAttribute("src",cambiarimg);
});