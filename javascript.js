const container = document.querySelector(".container")

const div = document.createElement("div")

div.classList.add("box")


container.appendChild(div)



for (let count = 0; count < 255; count++) {
    container.appendChild(div.cloneNode(true))
}





