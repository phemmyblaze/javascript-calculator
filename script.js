alert("what type of arichmetic operation do you want to perform?");
var operation = prompt("+, -, *, /");
var num1 = prompt("enter first number");
var num2 = prompt("enter second number");
var result = 0;
if (operation === "+") {
  result = parseInt(num1) + parseInt(num2);
} else if (operation === "-") {
  result = parseInt(num1) - parseInt(num2);
} else if (operation === "*") {
  result = parseInt(num1) * parseInt(num2);
} else if (operation === "/") {
  result = parseInt(num1) / parseInt(num2);
}
alert(`${num1} ${operation} ${num2} = ${result}`);
