


window.onload = () => {

    let divClasses = document.querySelectorAll("#board > div");
    let cellNum = 0;
    let gameStateX = [];
    let gameStateO = [];

    divClasses.forEach((div) => {

        div.classList.add("square");
        div.classList.add(`cell${++cellNum}`);

    });



    let evenOdd = 1;
    let winner = false;
    const newP = document.createElement("p");
    let newMsg = document.createTextNode("");
    divClasses.forEach((div) => {
        div.addEventListener("click", () => {
            if (div.innerHTML === ""){
                if (evenOdd % 2 === 1) {

                    div.innerHTML = 'X';
                    evenOdd++;

                } else {
                    div.innerHTML = 'O';
                    evenOdd++;
                }
            }

            if (div.innerHTML === 'X') {
                div.classList.remove('O');
                div.classList.add('X');
            } else {
                div.classList.remove('X');
                div.classList.add('O')
            }

            for( i=0; i<divClasses.length; i++) {

                    if (divClasses[i].innerHTML === 'X') {
                        if (!gameStateX.includes(`cell${i + 1}`)) {
                            gameStateX.push(`cell${i + 1}`)
                        }
                    } else if (divClasses[i].innerHTML === 'O') {
                        if (!gameStateO.includes(`cell${i + 1}`)) {
                            gameStateO.push(`cell${i + 1}`)
                        }
                    }
                }
            // console.log('X', gameStateX, 'O', gameStateO);


            if(!winner) {
                for(let i=0; i<combos.length; i++) {
                    if(combos[i].every(cell => gameStateX.includes(cell))) {
                        newMsg = document.createTextNode("Congratulations! X is the Winner!");
                        newP.appendChild(newMsg);
                        document.getElementById('status').appendChild(newP);
                        document.getElementById('status').classList.add('you-won')
                        winner = true;
                    }
                    if(combos[i].every(cell => gameStateO.includes(cell))) {
                        newMsg = document.createTextNode("Congratulations! O is the Winner!");
                        newP.appendChild(newMsg);
                        document.getElementById('status').appendChild(newP);
                        document.getElementById('status').classList.add('you-won')
                        winner = true;
                    }
                }
            }

        })
    })

    divClasses.forEach(div => {

        div.onmouseover = () => {
            div.classList.add("hover")
        }

        div.onmouseleave = () => {
            div.classList.remove("hover");
        }
    })

    const combos = [
        ['cell1', 'cell2', 'cell3'],
        ['cell4', 'cell5', 'cell6'],
        ['cell7', 'cell8', 'cell9'],
        ['cell1', 'cell5', 'cell9'],
        ['cell3', 'cell5', 'cell7'],
        ['cell1', 'cell4', 'cell7'],
        ['cell2', 'cell5', 'cell8'],
        ['cell3', 'cell6', 'cell9'],
    ]

    let restartBtn = document.querySelector(".controls > .btn");
    restartBtn.addEventListener("click", () => {
        cellNum = 0;
        divClasses.forEach((div) => {
            div.innerHTML = '';
            div.classList.remove(`cell${++cellNum}`);
            div.classList.remove("X");
            div.classList.remove(`O`);
        });
        document.getElementById('status').removeChild(newP);
        newP.removeChild(newMsg);
        document.getElementById('status').classList.remove('you-won');
        gameStateX = [];
        gameStateO = [];
        winner = false;


    })


}







