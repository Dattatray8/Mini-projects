const main = document.querySelector('.main');
const title = document.getElementById('title');
const restart = document.getElementById('rbtn');
let currentPlayer = 'X';
let won = false;

function start(e) {
    if (e.target.textContent === '') {
        e.target.textContent = currentPlayer;
        currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
    }
    if (main.children[0].textContent === 'X' && main.children[1].textContent === 'X' && main.children[2].textContent === 'X' || main.children[0].textContent === 'O' && main.children[1].textContent === 'O' && main.children[2].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[0].textContent + " won";
        main.children[0].style.backgroundColor = 'green';
        main.children[1].style.backgroundColor = 'green';
        main.children[2].style.backgroundColor = 'green';
        won = true
    }
    if (main.children[3].textContent === 'X' && main.children[4].textContent === 'X' && main.children[5].textContent === 'X' || main.children[3].textContent === 'O' && main.children[4].textContent === 'O' && main.children[5].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[3].textContent + " won";
        main.children[3].style.backgroundColor = 'green';
        main.children[4].style.backgroundColor = 'green';
        main.children[5].style.backgroundColor = 'green';
        won = true
    }
    if (main.children[6].textContent === 'X' && main.children[7].textContent === 'X' && main.children[8].textContent === 'X' || main.children[6].textContent === 'O' && main.children[7].textContent === 'O' && main.children[8].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[6].textContent + " won";
        main.children[6].style.backgroundColor = 'green';
        main.children[7].style.backgroundColor = 'green';
        main.children[8].style.backgroundColor = 'green';
        won = true
    }
    if (main.children[0].textContent === 'X' && main.children[3].textContent === 'X' && main.children[6].textContent === 'X' || main.children[0].textContent === 'O' && main.children[3].textContent === 'O' && main.children[6].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[0].textContent + " won";
        main.children[0].style.backgroundColor = 'green';
        main.children[3].style.backgroundColor = 'green';
        main.children[6].style.backgroundColor = 'green';
        won = true
    }
    if (main.children[1].textContent === 'X' && main.children[4].textContent === 'X' && main.children[7].textContent === 'X' || main.children[1].textContent === 'O' && main.children[4].textContent === 'O' && main.children[7].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[1].textContent + " won";
        main.children[1].style.backgroundColor = 'green';
        main.children[4].style.backgroundColor = 'green';
        main.children[7].style.backgroundColor = 'green';
        won = true
    }
    if (main.children[2].textContent === 'X' && main.children[5].textContent === 'X' && main.children[8].textContent === 'X' || main.children[2].textContent === 'O' && main.children[5].textContent === 'O' && main.children[8].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[2].textContent + " won";
        main.children[2].style.backgroundColor = 'green';
        main.children[5].style.backgroundColor = 'green';
        main.children[8].style.backgroundColor = 'green';
        won = true
    }
    if (main.children[0].textContent === 'X' && main.children[4].textContent === 'X' && main.children[8].textContent === 'X' || main.children[0].textContent === 'O' && main.children[4].textContent === 'O' && main.children[8].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[0].textContent + " won";
        main.children[0].style.backgroundColor = 'green';
        main.children[4].style.backgroundColor = 'green';
        main.children[8].style.backgroundColor = 'green';
        won = true
    }
    if (main.children[2].textContent === 'X' && main.children[4].textContent === 'X' && main.children[6].textContent === 'X' || main.children[2].textContent === 'O' && main.children[4].textContent === 'O' && main.children[6].textContent === 'O') {
        main.removeEventListener('click', start);
        title.innerText = main.children[2].textContent + " won";
        main.children[2].style.backgroundColor = 'green';
        main.children[4].style.backgroundColor = 'green';
        main.children[6].style.backgroundColor = 'green';
        won = true
    }
    if (!won) {
        let isDraw = true;
        for (let i = 0; i < main.children.length; i++) {
            if (main.children[i].textContent === '') {
                isDraw = false;
            }
        }
        if (isDraw) {
            title.innerText = 'Game is Draw';
            for (let i = 0; i < main.children.length; i++) {
                main.children[i].style.backgroundColor = 'yellow';
            }
        }
    }
}

main.addEventListener('click', start);

restart.addEventListener('click', () => {
    currentPlayer = 'X'
    for (let i = 0; i < main.children.length; i++) {
        main.children[i].textContent = '';
        main.children[i].style.backgroundColor = 'white';
    }
    title.innerText = "Tic Tac Toe";
    won = false;
    main.addEventListener('click', start);
})