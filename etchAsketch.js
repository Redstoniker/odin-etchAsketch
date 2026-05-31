const container = document.querySelector(".container");
let divs;
let removeAllBoxes = () =>{
    for(div of divs){
        container.removeChild(div);
    }
}

let addBoxes = count => {
     for(let i = 0; i<count; i++){
        container.appendChild(document.createElement("div"));
    }
}

let doWithBoxes = (method, ...params) => {
    for (const [index, box] of divs.entries()) {
        method(box, index, params);
    }
}

let updateBoxList = () => divs = container.querySelectorAll(".container > div");

let calculateBoxSize = sideLength => Math.floor(630/sideLength);

let setBoxSize = (box,index,params) => {
    let boxSize = params[0]+"px";
    box.style.minWidth = boxSize;
    box.style.maxHidth = boxSize;
}
changeContainerSize = (boxSize, sideLength) => {
    container.style.Width = boxSize*sideLength+"px";
    container.style.Height = boxSize*sideLength+"px";
}

let resetBoxesAndCount = sideLength => {
    if (divs !== undefined) {
        removeAllBoxes();
    }
    addBoxes(sideLength**2);    
    updateBoxList();
    doWithBoxes((box) => box.className = "box")
    let boxSize = calculateBoxSize(sideLength);
    doWithBoxes(setBoxSize, boxSize);


}

resetBoxesAndCount(100);
