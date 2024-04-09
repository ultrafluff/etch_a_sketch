const container = document.querySelector(".container2")


function changecolor() {
   
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
    let boxnumber = num * num
    
    for (let count = 0; count < boxnumber; count++) {
        const div = document.createElement("div")
        div.classList.add("box")
        container.appendChild(div)
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "darkgray";
        })
    }


}







const button = document.querySelector("#btn")

button.addEventListener("click", gridpopup)











