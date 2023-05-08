function scriptTest() {
    alert("Hey my script is running");
}

function greetings() {
    var name = document.getElementById('user_name').value;
    var mood = document.getElementById('user_mood').value;
    if(name=='') {
        name = "Customer";
    }
    if(mood=='') {
        mood = 'great';
    }
    document.getElementById('greeting').innerHTML = "The Depressed Flamingo welcomes you, " + name + "!" +
     " We're glad you are doing " + mood + "!";
}

function sum() {
    var int1 = parseInt(document.getElementById('int1').value);
    var int2 = parseInt(document.getElementById('int2').value);
    var sum = int1 + int2;
    alert("The sum is " + sum);
}

function flamignoPopulation() {
    document.getElementById('population').innerHTML = "The number of American Flamingos is estimated between 260,000 and 330,000 mature individuals and increasing.";
}

function NCtaxes() {
    var money = parseInt(document.getElementById('charge').value);
    var totalMin = (money + (money * 0.0475)).toFixed(2);
    var totalMax = (money + (money * 0.075)).toFixed(2);
    document.getElementById('taxes').innerHTML = "The total is between " + totalMin + " and " + totalMax;
}

function multiply() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var mult = num1 * num2;
    alert("The product is " + mult);
}

function divide() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var div = number1 / number2;
    alert("The divide is " + div);
}

function getShape() {
    var side = parseInt(document.getElementById('sides').value);
    var polyName;
    
    if(side == 0){
        polyName= 'No name for 0 sides'
    }
    if(side == 1){
        polyName= 'henagon'
    }
    if(side == 2){
        polyName= 'digon'
    }
    if(side == 3){
        polyName= 'trigon'
    }
    if(side == 4){
        polyName= 'tetragon'
    }
    if(side == 5){
        polyName= 'pentagon'
    }
    if(side == 6){
        polyName= 'hexagon'
    }
    if(side == 7){
        polyName= 'heptagon'
    }
    if(side == 8){
        polyName= 'octagon'
    }
    if(side == 9){
        polyName= 'enneagon'
    }
    if(side == 10){
        polyName= 'hendecagon'
    }
    alert("Polygon name: " + polyName);
}
