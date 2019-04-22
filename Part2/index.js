const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')
function setCard(){
    let card = document.getElementById(id.value)
    card.style.color = color.value
}

function reset(){
    document.getElementById("diamonds").style.color = 'grey';
    document.getElementById("hearts").style.color = 'grey';
    document.getElementById("clubs").style.color = 'grey';
    document.getElementById("spades").style.color = 'grey';
}
