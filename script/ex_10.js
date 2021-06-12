let button = document.querySelectorAll("div.buttons > div");
let equalButton = document.querySelector("div.equal");
let result = document.querySelector("div.result");
let value;

//Input button function --> div result
for (let i = 0; i <= 17; i++){
    result.innerHTML = "";
    button[0].onclick = function(){result.innerHTML = result.innerHTML.substring(0 , result.innerHTML.length - 1);};
    button[1].onclick = function(){result.innerHTML = "";};
    button[i].onclick = function(){
            value = button[i].textContent;
            result.innerHTML += value;
    };
}
// Fonction qui analyse type de calcul + op
function CalculType(e) {
    let calculArray = [];
    let current = '';
    for (let i = 0; e.charAt(i); i++) {
        let num = e.charAt(i);
        if ('%x/+-'.indexOf(num) > -1) {
            calculArray.push(parseFloat(current), num);
            current = '';
        }else {
            current += e.charAt(i);
        }
    }
    if (current !== '') {
        calculArray.push(parseFloat(current));
    }
    return calculArray;
}

// fonction de calcul
function calculate(args) {
    let addCalcul = [];
    let currentOp;
    let operator = [{'%': function(a, b) { return a % b; },
                     'x': function (a, b) { return a * b; },
                     '/': function(a, b) { return a / b; },
                     '+': function (a, b) { return a + b; },
                     '-': function(a, b) { return a - b; }}];
    for (let i = 0; i < operator.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (operator[i][args[j]]) {
                currentOp = operator[i][args[j]];
            }else if (currentOp) {
                addCalcul[addCalcul.length - 1] = currentOp(addCalcul[addCalcul.length - 1], args[j]);
                currentOp = null;
            } else {
                addCalcul.push(args[j]);
            }
        }
        args = addCalcul;
    }
    return args[0];
}
// event click --> bouton égal
equalButton.addEventListener('click', function() {
    result.innerHTML = calculate(CalculType(result.innerHTML));
});