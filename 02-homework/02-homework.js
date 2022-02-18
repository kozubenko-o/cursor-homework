let numberN;
let numberM;
let missEvenNumbers;
let sum = 0;

function getNumberFromPrompt(message) {
    let str;
    do {
        str = prompt(message);
    } while (!str || str.trim() === '' || !Number.isInteger(Number(str)));
    if (numberN && Number(str) <= numberN) {
        alert('Число М повинно бути більшим за число N, N = ' + numberN);
        return getNumberFromPrompt(message);
    } else {
        return Number(str);
    }
}

numberN = getNumberFromPrompt('Введіть перше ціле число (N)');
numberM = getNumberFromPrompt('Введіть друге ціле число (M)');
missEvenNumbers = confirm('Чи пропускати парні числа?');

for (let i = numberN; i <= numberM; i++) {
    if (missEvenNumbers && i % 2 === 0) {
        continue;
    }
    sum += i;
}

document.writeln(`Було введено: <ul> 
                                    <li>число N = ${numberN}</li>
                                    <li>число M = ${numberM}</li>
                                    <li>Пропускати парні числа - ${missEvenNumbers}</li>
                                </ul>
                 Сума до виводу = ${sum}`);