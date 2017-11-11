//most important global variables
var mainStr = "0";
var subStr = "0";
var numbers = [];
var operators = [];



//this function finds first index in string containing opertor symbol except decimal point
String.prototype.symbolIndex = function() {
  return this.search(/[\+-X\/]/);
};

//this function finds the first index containing a digit
String.prototype.numIndex = function(){
  return this.search(/[\d]/);
}

//this function returns the last character in any string
String.prototype.lastCharacter = function() {
  return this[this.length - 1];
};

String.prototype.isOperator = function(){
	return ['+','-','X','/','(',')'].includes(this.lastCharacter());
}

//this function takes two strings and displays them on calculator display
var display = function(data1, data2) {
  document.getElementById("mainline").innerHTML = data1;
  document.getElementById("subline").innerHTML = data2;
};


//this function is an event handler for any numeral button
var addNumeral = function(num){
if(mainStr.length <= 13 && subStr.length <= 36){
  if(mainStr === "0"){
    mainStr = subStr = num;
    numbers.push(num);
   
  }
  else{

    if(isNaN(subStr.lastCharacter()) && subStr.lastCharacter() != "."){
      numbers.push(num);
      mainStr = num;
    }
    else {
      numbers[numbers.length - 1] += num;
      mainStr = numbers[numbers.length - 1];
    }
    
    subStr += num;
  }
  
  display(mainStr, subStr);
}
};

var addOperator = function(operator){
if(subStr.length <= 36){
  if(!isNaN(subStr.lastCharacter())){
    operators.push(operator);
  }
  else {
    operators[operators.length-1] += operator;
  }

  subStr += operator;
  mainStr = numbers[numbers.length - 1];
  display(mainStr,subStr);
}
};

var period = function() {
  subStr += ".";
  display(mainStr, subStr);
  numbers[numbers.length - 1] += ".";
};

//button event handling functions
var acbutton = function() {
  mainStr = subStr = "0";
  numbers = [];
  display(mainStr, subStr);
};


//function for backspace button
var bsbutton = function() {
  if (subStr.length > 1) {
    //if an operator other than .
    if (isNaN(subStr.lastCharacter()) && subStr.lastCharacter() != ".") {
      //more than one operator
      if (operators[operators.length - 1].length > 1) {
        operators[operators.length - 1] = operators[
          operators.length - 1
        ].substring(0, operators.length - 1);
      } else {
        //only one operator
        operators.pop();
      }
    } else {
      //if it is a number
      //more than one numeral
      if (numbers[numbers.length - 1].length > 1) {
        numbers[numbers.length - 1] = numbers[numbers.length - 1].substring(
          0,
          numbers.length
        );
      } else {
        //only one number
        numbers.pop();
      }
    }

    subStr = subStr.substring(0, subStr.length - 1);
    mainStr = numbers[numbers.length - 1];
    display(mainStr, subStr);
  } else {
    mainStr = subStr = "0";
    numbers = [];
    operators = [];
    display(mainStr, subStr);
  }
};

var button0 = function() {
  addNumeral("0");
};

var button1 = function() {
  addNumeral("1");
};

var button2 = function() {
  addNumeral("2");
};

var button3 = function() {
  addNumeral("3");
};
var button4 = function() {
  addNumeral("4");
};

var button5 = function() {
  addNumeral("5");
};

var button6 = function() {
  addNumeral("6");
};

var button7 = function() {
  addNumeral("7");
};

var button8 = function() {
  addNumeral("8");
};

var button9 = function() {
  addNumeral("9");
};


var divide = function() {
  addOperator("/");
};

var multiply = function() {
  addOperator("X");
};

var minus = function() {
  addOperator("-");
};

var plus = function() {
  addOperator("+");
};

var openBracket = function() {
  addOperator("(");
};

var closingBracket = function() {
 addOperator(")");
};

var equals = function() {
  numbers = mainStr = subStr = eval(subStr.replace("X","*")).toString();
  operators=[];
  display(mainStr, subStr);
};


