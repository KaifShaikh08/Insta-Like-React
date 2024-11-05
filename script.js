let container = document.querySelector("#container")

let react = document.querySelector("i")

container.addEventListener("dblclick",() => {
    react.style.transform = "translate(-50%,-50%) scale(1)"
    react.style.color = "red"
    react.style.opacity = "0.8"

    setTimeout(() => {
        react.style.transform = "translate(-50%,-50%) scale(0)"
    }, 2000);
})

