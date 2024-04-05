const container = document.querySelector(".container")


function changecolor() {
   
}



for (let count = 0; count < 256; count++) {
    const div = document.createElement("div")
    div.classList.add("box")
    container.appendChild(div)
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "darkgray";
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "white";
    })
}







