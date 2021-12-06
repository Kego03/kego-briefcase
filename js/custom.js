// Custom Js

$(".text-typing").on("animationend", function(){
    $(".text-typing").attr('style', 'display:none;');
    $(".text-typing2").removeAttr('style');
})
$(".text-typing2").on("animationend", function(){
    $(".text-typing3").removeAttr('style');
})

const toh = document.querySelector("#toHome")
const tob = document.querySelector("#toBriefcase")
const tow = document.querySelector("#toWhy")
const toc = document.querySelector("#toContactUs")

window.addEventListener("scroll", ()=>{
    var scroll = scrollY;
    console.log(scroll)
})
toh.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
})
tob.addEventListener("click", ()=>{
    window.scrollTo(0, 906);
})
tow.addEventListener("click", ()=>{
    window.scrollTo(0, 1812);
})
toc.addEventListener("click", ()=>{
    window.scrollTo(0, 2718);
})