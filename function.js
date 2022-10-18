 const drop =document.querySelectorAll(".dropdowns");
 const para = document.querySelectorAll(".content");
 
 drop.forEach(dropdowns => {
dropdowns.addEventListener("click", () =>{
    dropdowns.classList.toggle("active");
});
 } )