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
const btnD1 = document.querySelector("#btnd1")
const btnD2 = document.querySelector("#btnd2")
const btnD3 = document.querySelector("#btnd3")

let animate1 = document.querySelectorAll(".animate1")

if($(window).width() <= 991){
    window.addEventListener("scroll", ()=>{
        let scrollTop = document.documentElement.scrollTop;
        for(let i= 0; i < animate1.length; i++ ){
            let heightanimate = animate1[i].offsetTop;
            if(heightanimate -300 < scrollTop){
                animate1[i].classList.add("animar");
            }
        }
    });
    window.addEventListener("scroll", ()=>{
        let scrollTop = document.documentElement.scrollTop;
        for(let i= 0; i < animate1.length; i++ ){
            let heightanimate = animate1[i].offsetTop;
            if((heightanimate * 3.5) - 300 < scrollTop || scrollTop == 0){
                animate1[i].classList.remove("animar");
            }
        }
    });
}else{
    window.addEventListener("scroll", ()=>{
        let scrollTop = document.documentElement.scrollTop;
        for(let i= 0; i < animate1.length; i++ ){
            let heightanimate = animate1[i].offsetTop;
            if(heightanimate -300 < scrollTop){
                animate1[i].classList.add("animar");
            }
        }
    });
    window.addEventListener("scroll", ()=>{
        let scrollTop = document.documentElement.scrollTop;
        for(let i= 0; i < animate1.length; i++ ){
            let heightanimate = animate1[i].offsetTop;
            if(heightanimate + heightanimate - 300 < scrollTop || scrollTop == 0){
                animate1[i].classList.remove("animar");
            }
        }
    });
}


var bsh = document.querySelector(".navbar").clientHeight;

toh.addEventListener("click", ()=>{
    let sech = document.querySelector(".secHome").offsetTop;
    window.scrollTo(0, sech - bsh);
})
tob.addEventListener("click", ()=>{
    let secb = document.querySelector(".secBriefcase").offsetTop;
    window.scrollTo(0, secb - bsh);
})
btnD1.addEventListener("click", ()=>{
    let secb = document.querySelector(".secBriefcase").offsetTop;
    window.scrollTo(0, secb - bsh);
})
tow.addEventListener("click", ()=>{
    let secw = document.querySelector(".secWhy").offsetTop;
    window.scrollTo(0, secw - bsh);
})
btnD2.addEventListener("click", ()=>{
    let secw = document.querySelector(".secWhy").offsetTop;
    window.scrollTo(0, secw - bsh);
})
toc.addEventListener("click", ()=>{
    let secc = document.querySelector(".secContactUs").offsetTop;
    window.scrollTo(0, secc - bsh);
})
btnD3.addEventListener("click", ()=>{
    let secc = document.querySelector(".secContactUs").offsetTop;
    window.scrollTo(0, secc - bsh);
})