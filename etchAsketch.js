const container = document.querySelector(".container");
const containerWidth = getComputedStyle(container).getPropertyValue("width");
let boxes = document.querySelectorAll("#box");
const resetButton = document.querySelector("#newB");
const clearButton = document.querySelector("#clearB");
let countPerSide = 16;

const addNewBoxes = (count = 1, minwidth = "6px") => {
    for(let i = 0; i<count; i++) {
        const box = document.createElement("div");
        box.classList += i+1;
        box.id += "box";
        container.appendChild(box);
        box.style.minWidth = minwidth; 
    }
    boxes = document.querySelectorAll("#box");
}
const deleteAllBoxes = () => {
    for (const box of boxes) {
        box.remove();
    }
}

const calcBoxWidth = () => {
    let containerWidthNumber = containerWidth.replace("px","");
    let boxWidth = containerWidthNumber / countPerSide;
    boxWidth += "px";
    return boxWidth;
}

const resetBoxes = () => {
    if(0 < countPerSide && countPerSide <= 100){
        const totalBoxCount = countPerSide ** 2
        deleteAllBoxes();
        addNewBoxes(totalBoxCount,calcBoxWidth());
        addAllBoxEventListeners();
    }
}

const trigger = e => e.target.style.backgroundColor="black";

function addAllBoxEventListeners () {
    for (const box of boxes){
        box.addEventListener("mouseover",  trigger)
    }
}

function clear (e) {
    resetBoxes();
    e.target.style.backgroundColor = "burlywood";
    setTimeout(() => {
        e.target.style.backgroundColor = "";
    }, 100);
}

function newGrid (e) {
    e.target.style.backgroundColor = "burlywood";
    setTimeout(() => {
        e.target.style.backgroundColor = "";
    }, 100);
    countPerSide=Number(prompt("How many boxes do you want per side?", "16"));
    resetBoxes();
    
}



resetBoxes();

clearButton.addEventListener("click", clear);
resetButton.addEventListener("click", newGrid)
