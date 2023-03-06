let bev = document.getElementById('bev')
let bevContent = document.getElementById('bevContent')
bev.addEventListener("mouseover", () => {
    bevContent.style.display = "block"
    console.log("test")
})

bev.addEventListener("mouseleave", () => {
    bevContent.style.display = "none"
})