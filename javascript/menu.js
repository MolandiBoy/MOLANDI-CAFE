let bev = document.getElementById('bev')
let bevContent = document.getElementById('bevContent')
bev.addEventListener("mouseover", () => {
    bevContent.style.display = "block"
    console.log("test")
})
bev.addEventListener("mouseleave", () => {
    bevContent.style.display = "none"
})

let meals = document.getElementById('meals')
let mealsContent = document.getElementById('mealsContent')
meals.addEventListener("mouseover", () => {
    mealsContent.style.display = "block"
    console.log("test")
})
meals.addEventListener("mouseleave", () => {
    mealsContent.style.display = "none"
})

let pizza = document.getElementById('pizza')
let pizzaContent = document.getElementById('pizzaContent')
pizza.addEventListener("mouseover", () => {
        pizzaContent.style.display = "block"
            console.log("test")
})
pizza.addEventListener("mouseleave", () => {
        pizzaContent.style.display = "none"
})

let salads = document.getElementById('salads')
let saladsContent = document.getElementById('saladsContent')
salads.addEventListener("mouseover", () => {
    saladsContent.style.display = "block"
    console.log("test")
})
salads.addEventListener("mouseleave", () => {
    saladsContent.style.display = "none"
})

let desert = document.getElementById('desert')
let desertContent = document.getElementById('desertContent')
desert.addEventListener("mouseover", () => {
    desertContent.style.display = "block"
    console.log("test")
})

desert.addEventListener("mouseleave", () => {
    desertContent.style.display = "none"
})