
const footer = document.querySelector("footer .info")
footer.classList = [] //instaed of going to each page and removing it


const header = document.querySelector(".animate")
const menu = document.querySelector(".nav-menu")
const toggler = document.querySelector(".menu-toggler")



console.log(header);
toggler.addEventListener("click" , e => {
    menu.classList.toggle("active")
    toggler.classList.toggle("active")
} )
document.querySelector(".dropdown-openner").addEventListener("click" , e => {
    document.querySelector(".dropdown-openner").classList.toggle("active")
    document.querySelector(".dropdown-menu").classList.toggle("active")
    console.log( document.querySelector(".dropdown-openner").className ,  1,document.querySelector(".dropdown-menu").className);
})



window.addEventListener("scroll" , e => {
    if(header) {
        if(window.scrollY > 200) {
        header.classList.add("active")
        }
        if(window.scrollY < 200) {
        header.classList.remove("active")
        }
    }
    const items = document.querySelectorAll(".hide")    
    items.forEach(item => {
        let pos = item.getBoundingClientRect().top
        let windwoPos = window.innerHeight / 1.5

        if(pos  < windwoPos ) {
            item.classList.remove("hide")
            console.log("show");
        } 

    })
})

//faqs
const faq_items = document.querySelectorAll(".faq-item")
faq_items.forEach(item => {
    item.addEventListener("click" , e => {
        if(e.target.classList.contains("faq-openner")) {
            e.target.classList.toggle("active")
           item.querySelector(".answer").classList.toggle("active")
        }
    })
})






//testemonial sliders
const slides_container = document.querySelector(".testemonials-slider");
const arrows = document.querySelectorAll(".testemonials .arrow");
const items = document.querySelectorAll(".testemonials .slides li.slide-item");

        // let centralIndex = Math.floor(items.length / 2);
let activeItemIndex = Math.floor(items.length / 2);
items[activeItemIndex].classList.add("active")


let TransformSize = 40;
if(window.innerWidth <= 1024) TransformSize = 60
if(window.innerWidth <= 780) TransformSize = 85
if(window.innerWidth <= 480) TransformSize = 82
let currentTansform = 0;
let LastTrnasform = 0;
arrows[0].addEventListener("click" , e => HandleArrowClick(-1 , 1) );
arrows[1].addEventListener("click" , e => HandleArrowClick(1 , -1) );

function HandleArrowClick(indexDir , trnasformDir) {

    if(activeItemIndex + indexDir > items.length - 1) return;
            if(activeItemIndex + indexDir < 0) return;

    items.forEach(item => {
        item.classList.remove("active");
    })
    activeItemIndex += indexDir;
    currentTansform = trnasformDir * TransformSize;
    LastTrnasform += currentTansform;
    slides_container.style.transform = `translate(${LastTrnasform}vw)`;

    console.log("TRANSFORM:" ,LastTrnasform);
    items[activeItemIndex].classList.add("active")
}

//Handle Swipe
let startX = 0;
let endX = 0;

slides_container.addEventListener("mousedown" , e => {
   startX = e.x
})

slides_container.addEventListener("mouseup" , e => {
        endX = e.x;

       if(startX < endX) {
           console.log("swipe");
                   HandleArrowClick(-1 , 1) 

    } else if(startX > endX) {
                   console.log("swipe");

                   HandleArrowClick(1 , -1) 

       }
    
})


