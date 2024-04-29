const likes = document.querySelectorAll(".buy1",".buy2",".buy3");
const incremento = document.querySelectorAll(".like");
likes.forEach((button, index) =>{
    let count=0;
    button.addEventListener("click",function() {
        count++;
        incremento[index].textContent = count;
    });
});