let imgs = document.querySelectorAll(".img1, .img2, .img3");

imgs.forEach((img) => {
    img.addEventListener("mouseenter", function() {
        img.style.border = "7px solid black";
        img.style.opacity = 0.5;
    });

    img.addEventListener("mouseleave", function() {
        img.style.border = "none";
        img.style.opacity = 1;
    });
});

let userscore = document.querySelector("#your-score");
let compscore = document.querySelector("#comp-score");
let i = 0;
let j = 0;
let ff = document.querySelector(".msg");

let gencomputerchoice = () => {
    let option = ["rock", "paper", "scissors"];
    let randindex = Math.floor(Math.random() * 3);
    return option[randindex];
};

let drawgame = () => {
    ff.innerText = "Game was draw.";
    ff.style.backgroundColor = "#364759"; // Change to a neutral color for a draw
    console.log("Game was draw.");
};

let showwinner = (userw) => {
    if (userw) {
        i++;
        userscore.innerText = i;
        ff.innerText = "You win!";
        ff.style.backgroundColor = "green";
        console.log("You win!");
    } else {
        j++;
        compscore.innerText = j;
        ff.innerText = "You lose";
        ff.style.backgroundColor = "red";
        console.log("You lose!");
    }
};

let playgame = (s) => {
    let cc = gencomputerchoice();
    console.log(`Your choice: ${s}`);
    console.log(`Computer's choice: ${cc}`);

    if (s === cc) {
        drawgame();
    } else {
        let userwin = true;
        if (s === "stone") {
            userwin = cc === "paper" ? false : true;
        } else if (s === "paper") {
            userwin = cc === "scissors" ? false : true;
        } else {
            userwin = cc === "stone" ? false : true;
        }
        showwinner(userwin);
    }
};

let choice = document.querySelectorAll("img");

choice.forEach(img => {
    img.addEventListener("click", function() {
        let d = img.getAttribute("id");
        playgame(d);
    });
});
