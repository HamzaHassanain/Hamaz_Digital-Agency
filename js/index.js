const menu = document.querySelector(".nav-menu")
const toggler = document.querySelector(".menu-toggler")

toggler.addEventListener("click" , e => {
    menu.classList.toggle("active")
    toggler.classList.toggle("active")
} )
document.querySelector(".dropdown-openner").addEventListener("click" , e => {
    document.querySelector(".dropdown-openner").classList.toggle("active")
    document.querySelector(".dropdown-menu").classList.toggle("active")
    console.log( document.querySelector(".dropdown-openner").className ,  1,document.querySelector(".dropdown-menu").className);
})

//animations
// var scroll = window.requestAnimationFrame ||
//              // IE Fallback
//              function(callback){ window.setTimeout(callback, 1000/60)};
// var elementsToShow = document.querySelectorAll('.show'); 

// function loop() {

//     Array.prototype.forEach.call(elementsToShow, function(element){
//       if (isElementInViewport(element)) {
//         element.classList.add('is-visible');
//         console.log("show");
//     } else {
//         element.classList.remove('is-visible');
//         console.log("hoode");
//       }
//     });

//     scroll(loop);
// }

// // Call the loop for the first time
// loop();

// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0
//       && rect.bottom >= 0)
//     ||
//     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//     ||
//     (rect.top >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//   );
// }
window.addEventListener("scroll" , e => {
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




