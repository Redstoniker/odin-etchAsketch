const container = document.querySelector(".container");
let divs;
let resetBoxesWithCount = sideLength => {
    if (divs !== undefined) {
        for( div of divs){
        container.removeChild(div);
        }
    }

    for(let i = 0; i<sideLength**2; i++){
        container.appendChild(document.createElement("div"));
    }

    divs = container.querySelectorAll(".container > div")

    for (const [index,box] of divs.entries()) {
    box.textContent = index;
}
}

console.log(divs)

