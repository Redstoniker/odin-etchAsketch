const container = document.querySelector(".container");
const containerWidth = getComputedStyle(container).getPropertyValue("width");
let boxes = document.querySelectorAll("#box");

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

const calcBoxWidth = countPerSide => {
    let containerWidthNumber = containerWidth.replace("px","");
    let boxWidth = containerWidthNumber / countPerSide;
    boxWidth += "px";
    return boxWidth;
}

const resetBoxes = countPerSide => {
    if(0 < countPerSide && countPerSide <= 100){
        const totalBoxCount = countPerSide ** 2
        deleteAllBoxes();
        addNewBoxes(totalBoxCount,calcBoxWidth(countPerSide));
        addAllBoxEventListeners();
    }
}

const trigger = e => e.target.style.backgroundColor="black";

function addAllBoxEventListeners () {
    for (const box of boxes){
        box.addEventListener("mouseover",  trigger)
    }
}

resetBoxes(16);
