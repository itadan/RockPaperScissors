const message = document.querySelector('.message')
const asyncGame = document.querySelector('.game')
const buttons = document.querySelectorAll('button')

function computerRandom(){
    const random = ['paper', 'scissors', 'stone']
    const randomIndex = Math.floor(Math.random() * random.length)
    return random[randomIndex] 
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Ничья';
    } else if (
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'stone' && computerChoice === 'scissors')
    ) {
        return 'Вы победили!';
    } else {
        return 'Компьютер победил';
    }
}

function btnClick(event) {
    const userChoice = event.target.alt;
    const computerChoice = computerRandom();
    const result = determineWinner(userChoice, computerChoice);

    message.innerHTML = '';
    
    const userMessage = document.createElement('p');
    userMessage.textContent = `Вы выбрали ${userChoice}!`;
    message.appendChild(userMessage);

    const computerMessage = document.createElement('p');
    computerMessage.textContent = `Компьютер выбрал ${computerChoice}!`;
    message.appendChild(computerMessage);

    const resultMessage = document.createElement('p');
    resultMessage.textContent = result;
    message.appendChild(resultMessage);
}

buttons.forEach(button => button.addEventListener('click', btnClick));

