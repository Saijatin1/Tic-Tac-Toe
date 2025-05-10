let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let container = document.querySelector(".container");
 
let turno = true;

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Handle box clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            console.log("box clicked");
            if (turno) {
                box.innerText = "O";
                turno = false;
            } else {
                box.innerText = "X";
                turno = true;
            }
            
        }
        checkWinner();
        
    });
});
let windecx=document.querySelector(".windec")
// Check for a winner
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
           setTimeout(() => {
            windecx.innerText="Congratulations!"+ pos1val+"you are the winner";
            container.classList.add("disabled");
           },100);
           return;
            
        }
    }

    // Check for a tie
    if ([...boxes].every((box) => box.innerText !== "")) {
        setTimeout(() => {
            windecx.innerText="it's a tie";
            container.classList.add("disabled");
           },100);
    }
};

// Reset the game
const resetGame = () => {
    container.classList.remove("disabled");
    windecx.innerText="";
    boxes.forEach((box) => {
        box.innerText = ""; 
    });
    turno = true; 
};


reset.addEventListener("click", resetGame);

