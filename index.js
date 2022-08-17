let homeEl = document.getElementById("home-score-board")
let guestEl = document.getElementById("guest-score-board")

// let homeBtn1El = document.getElementById("home-btn1")
// let homeBtn2El = document.getElementById("home-btn2")
// let homeBtn3El = document.getElementById("home-btn3")

// let guestBtn1El = document.getElementById("guest-btn1")
// let guestBtn2El = document.getElementById("guest-btn2")
// let guestBtn3El = document.getElementById("guest-btn3")

let homeScores = 0
let guestScores = 0

// for home
function homeAdd(addNumber){
    homeScores += addNumber
    homeEl.textContent = homeScores
}

function guestAdd(addNumber){
    guestScores += addNumber
    guestEl.textContent = guestScores
}

function reset(){
    homeScores=0
    homeEl.textContent = homeScores
    guestScores=0
    guestEl.textContent = guestScores
}