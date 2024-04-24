function hide(el) {

    el.remove();

}
 function aumentarbtn1(){
    var contador1= document.getElementById("pet1");
    var like1 = parseInt(contador1.innerHTML);
    contador1.innerHTML = like1 + 1 + "petting(s)"
 }
