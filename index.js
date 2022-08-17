let homeEl = document.getElementById("home-score-board")
let guestEl = document.getElementById("guest-score-board")

let homeBtn1El = document.getElementById("home-btn1")
let homeBtn2El = document.getElementById("home-btn2")
let homeBtn3El = document.getElementById("home-btn3")

let homeScores = 0
let guestScores = 0

// for home
homeBtn1El.addEventListener("click", function(){homeAdd(1)})
homeBtn2El.addEventListener("click", function(){homeAdd(2)})
homeBtn3El.addEventListener("click", function(){homeAdd(3)})

function homeAdd(addNumber){
    homeScores += addNumber
    homeEl.textContent = homeScores
}

// for guest


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

