const menu = document.querySelector(".nav-menu")
const toggler = document.querySelector(".menu-toggler")

toggler.addEventListener("click" , e => {
    menu.classList.toggle("active")
} )


//animations
const Showitems = document.querySelectorAll(".hide")



//faqs
const faq_items = document.querySelectorAll(".faq-item")
faq_items.forEach(item => {
    item.addEventListener("click" , e => {
        if(e.target.classList.contains("btn")) {
            e.target.classList.toggle("active")
           item.querySelector(".answer").classList.toggle("active")
        }
    })
})


