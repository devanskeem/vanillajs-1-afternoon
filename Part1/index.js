let board = []
function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }
    else{
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = 'O'
    }
    let topLeft = board[0]
    let topMid = board[1]
    let topRight = board[2]
    let midLeft = board[3]
    let midMid = board[4]
    let midRight = board[5]
    let botLeft = board[6]
    let botMid = board[7]
    let botRight = board[8]

    if((topLeft === topMid && topRight === topLeft && topLeft !== undefined) || 
    (midLeft === midMid && midRight === midLeft && midLeft !== undefined) ||
    (botLeft === botMid && botRight === botLeft && botLeft !== undefined) ||
    (topLeft === midMid && midMid === botRight && topLeft !== undefined) ||
    (topRight === midMid && midMid === botLeft && topRight !== undefined) ||
    (topLeft === midLeft && midLeft === botLeft && topLeft !== undefined) ||
    (topMid === midMid && midMid === botMid && topMid !== undefined) ||
    (topRight === midRight && midRight === botRight && topRight !== undefined)){
        window.alert(`Player ${clickedElement.innerText} is the WINNER!!`)
        reset()
    }
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner");
        reset()
    }
}

function reset(){
    for (let i = 0; i <= 9; i++){
        if(document.getElementById(i.toString())){
            document.getElementById(i.toString()).innerText = ' ';
            board = []
        }
    }
}



