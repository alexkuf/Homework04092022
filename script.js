
let answer;

let a = prompt('Write the first number....');
let b = prompt('Write the second number...');
let c = prompt('What do you want to do?  "*"  or  "/" or "+" or "-" ');

if (c === "*") {
    answer = a * b
    alert(answer);
}
if (c === "/") {
    answer = a / b
    alert(answer);
}
if (c === "+") {
    answer = a + b
    alert(answer);
}
if (c === "-") {
    answer = a - b
    alert(answer);
}

