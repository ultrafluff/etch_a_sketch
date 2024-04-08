const container = document.querySelector(".container2")


function changecolor() {
   
}


const button = document.querySelector("#btn")

button.addEventListener("click",)



for (let count = 0; count < 256; count++) {
    const div = document.createElement("div")
    div.classList.add("box")
    container.appendChild(div)
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "darkgray";
    })
}







