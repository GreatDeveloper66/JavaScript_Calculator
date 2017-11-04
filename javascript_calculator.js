//most important global variables
var mainStr = "0";
var subStr = "0";



//this function reverses a string
String.prototype.reverse = function() {
  return this.split("").reverse().join("");
};

//this function finds first index in string containing opertor symbol
String.prototype.index = function() {
  return this.search(/[\+-\/()X]/);
};

//this function shaves off first number and operator in string
String.prototype.shaveNum = function() {
  if (this.index() === -1) {
    return "0";
  }
  return this.substring(this.index() + 1);
};

//this function takes first number and operator in string
String.prototype.takeNum = function() {
  if (this.index() == -1) {
    return this;
  }
  return this.substring(0, this.index());
};

//this function shaves off last number and operator in string
String.prototype.shaveLast = function() {
  return this.reverse().shaveNum().reverse();
};

//this function takes last number and operator in string
String.prototype.takeLast = function() {
  return this.reverse().takeNum().reverse();
};

//this function takes two strings and displays them on calculator display
var display = function(data1, data2) {
  document.getElementById("mainline").innerHTML = data1;
  document.getElementById("subline").innerHTML = data2;
};

//this function is an event handler for any numeral button
var addNumeral = function(num){
  if(subStr === "0"){
    mainStr = num;
    subStr = num;
  }
  else{
  mainStr += num;
  subStr += num;
  }
  display(subStr, mainStr);
};

var addOperator = function(operator){
  mainStr += operator;
  display(subStr, mainStr);
  subStr = "";
};


//button event handling functions
var acbutton = function() {
  mainStr = subStr = "0";
  display(mainStr, subStr);
};

var cebutton = function() {
  //returns true if char is one of the operand elements.
  mainStr = mainStr.shaveLast();
  subStr = mainStr.takeLast();
  display(subStr, mainStr);
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

var period = function() {
  addOperator(".");
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
  mainStr = subStr = eval(mainStr.replace("X","*"));
  mainStr = subStr.toString();
  display(subStr, mainStr);
};


