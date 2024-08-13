let n = prompt("Please enter the number");
let resultHtml = '';

for (let i = 1; i <= 12; i++) {
    let result = n * i;
    resultHtml += `${n} x ${i} = ${result}<br>`;
}

document.querySelector('h1').innerHTML = resultHtml;