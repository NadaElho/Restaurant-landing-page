let nums=document.querySelectorAll(".statis span");
let statistics=document.querySelector(".statistics");
let started=false; //Function started or not

window.onscroll=function(){
    if(window.scrollY >= statistics.offsetTop){
        if(!started){
            nums.forEach(num => {
                startCount(num);
            });
        }
        started=true;
    }
}

const audio = document.querySelector("audio");
let timer;

function startCount(el){
    let target=el.dataset.target;
    let counter=setInterval(()=>{
        el.textContent++;
        if(el.textContent == target){
            clearInterval(counter);
        }
    },2000/target)
}
