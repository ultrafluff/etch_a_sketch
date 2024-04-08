const container = document.querySelector(".container2")


function changecolor() {
   
}






for (let count = 0; count < 256; count++) {
    const div = document.createElement("div")
    div.classList.add("box")
    container.appendChild(div)
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "darkgray";
    })
}


function gridpopup() {
    let num = window.prompt("choose your grid size")
    if (num < 10) {
        alert("please choose a higher number")
        return
    } else if (num > 100) {
        alert("please choose a smaller grid")
        return
    }
    if (num == 15) {
        for (let count = 0; count < 31; count++) {
            const div = document.querySelector(".box")
            container.removeChild(div)
        }
    }
}

const button = document.querySelector("#btn")

button.addEventListener("click", gridpopup)







