
window.onload = () => {
    let divClasses = document.querySelectorAll("#board > div");

    divClasses.forEach((div) => {div.classList.add("square")});

    evenOdd = 1;

    divClasses.forEach((div) => {div.addEventListener("click", () => {
        if(evenOdd % 2 === 1) {

            div.innerHTML = 'X';
            evenOdd++;

        } else {
            div.innerHTML = 'O';
            evenOdd++;
        }

        if(div.innerHTML === 'X') {
            div.classList.remove('O');
            div.classList.add('X');
        } else {
            div.classList.remove('X');
            div.classList.add('O')
        }

    })})


}
