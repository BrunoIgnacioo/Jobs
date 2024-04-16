let cukisbuton = document.getElementById("aceptar")
cukisbuton.addEventListener("click",function(){
    cukisbuton.parentElement.remove();
})

function aviso(){
    window.alert("Cargando Estado del Clima")
}
setTimeout(aviso,1000)

let bt_osorno =document.querySelector("#osorno")

bt_osorno.addEventListener("click",function(){
    document.getElementById("cosorno").style.display = "block"
    document.getElementById("csantiago").style.display = "none";
    document.getElementById("centrelagos").style.display = "none";
    document.getElementById("cpttmont").style.display = "none";
    document.getElementById("ctemuco").style.display = "none";
});

let bt_santiago =document.querySelector("#santiago")

bt_santiago.addEventListener("click",function(){
    document.getElementById("csantiago").style.display = "block"
    document.getElementById("cosorno").style.display = "none";
    document.getElementById("centrelagos").style.display = "none";
    document.getElementById("cpttmont").style.display = "none";
    document.getElementById("ctemuco").style.display = "none";
});

let bt_entrelagos =document.querySelector("#entrelagos")

bt_entrelagos.addEventListener("click",function(){
    document.getElementById("cosorno").style.display = "none"
    document.getElementById("csantiago").style.display = "none";
    document.getElementById("centrelagos").style.display = "block";
    document.getElementById("cpttmont").style.display = "none";
    document.getElementById("ctemuco").style.display = "none";
});

let bt_puerto =document.querySelector("#pttmont")

bt_puerto.addEventListener("click",function(){
    document.getElementById("cosorno").style.display = "none"
    document.getElementById("csantiago").style.display = "none";
    document.getElementById("centrelagos").style.display = "none";
    document.getElementById("cpttmont").style.display = "block";
    document.getElementById("ctemuco").style.display = "none";
});

let bt_temuco =document.querySelector("#temuco")

bt_temuco.addEventListener("click",function(){
    document.getElementById("cosorno").style.display = "none"
    document.getElementById("csantiago").style.display = "none";
    document.getElementById("centrelagos").style.display = "none";
    document.getElementById("cpttmont").style.display = "none";
    document.getElementById("ctemuco").style.display = "block";
});