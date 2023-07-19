const grid = document.querySelector(".grid");

let colorState = "rainbow";

let randomNumber = (max)=>{
    return Math.floor(Math.random()*max);
}

let colorChoice = (option) =>{
    if(option.title === "rainbow"){
        let redValue = randomNumber(255);
        let greenValue = randomNumber(255);
        let blueValue = randomNumber(255);
        return `rgb(${redValue},${greenValue},${blueValue})`;
    }
    else if(option.title ==="black"){
        return "rgb(0,0,0)";
    }
}


let makeNewGrid = (size) => {;
    grid.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            cell.style.width = `${500/size}px`;
            cell.style.height = `${500/size}px`;
            cell.addEventListener("mouseover", (e)=>{
                e.target.style.backgroundColor = colorChoice({title : colorState});
                console.log("over");
            })
        }
        
    }
}

makeNewGrid(16)

const inputs = [...document.querySelectorAll(".controller input")]
console.log(inputs);
inputs.forEach((input)=>{
    input.addEventListener("change",(e)=>{
        colorState = e.target.value;
    })
})

let newBtn = document.querySelector("#grid-querry")
newBtn.addEventListener("click",()=>{
    makeNewGrid(parseInt(prompt("Enter a grid size :")))
})