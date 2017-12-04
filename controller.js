function goHome(){
  window.location.href = "main.html";
}

function startGame(){
  var answers = getValuesFromHTML();
  var organizedAnswers = [];
  for(var i = 0; i < 8; i++){
    var topValue = 0;
    if(answers[i].value != "" || answers[i].name!=""){
      organizedAnswers.push(answers[i]);
    }
  }
  sortByKey(organizedAnswers, "value");
  storeAnswersInStorage(organizedAnswers);
  window.location.href = "board.html";
}

function playGame(){
  var boardAnswers = getAnswersFromStorage();
    for(var i = 0; i<boardAnswers.length; i++){
      var tag = ".boardAnswer" + (i+1);
      var tag2 = ".boardValue" + (i+1);
        document.querySelector(tag).innerHTML = boardAnswers[i].name;
        document.querySelector(tag2).innerHTML = boardAnswers[i].value;
    }
    window.onkeyup = function(e) {
       var key = e.keyCode ? e.keyCode : e.which;

       if (key >= 49 && key <= 56) {
           var numberPressed = key - 48;
           var tag = ".boardAnswer" + (numberPressed);
           var tag2 = ".boardValue" + (numberPressed);
           document.querySelector(tag).setAttribute("style", "visibility: visible");
           document.querySelector(tag2).setAttribute("style", "visibility: visible");
       }
    }
}

function getValuesFromHTML(){
  var name = document.getElementById("answer1").value;
  var value = document.getElementById("value1").value;
  var answer1 = {name, value};
  name = document.getElementById("answer2").value;
  value = document.getElementById("value2").value;
  var answer2 = {name, value};
  name = document.getElementById("answer3").value;
  value = document.getElementById("value3").value;
  var answer3 = {name, value};
  name = document.getElementById("answer4").value;
  value = document.getElementById("value4").value;
  var answer4 = {name, value};
  name = document.getElementById("answer5").value;
  value = document.getElementById("value5").value;
  var answer5 = {name, value};
  name = document.getElementById("answer6").value;
  value = document.getElementById("value6").value;
  var answer6 = {name, value};
  name = document.getElementById("answer7").value;
  value = document.getElementById("value7").value;
  var answer7 = {name, value};
  name = document.getElementById("answer8").value;
  value = document.getElementById("value8").value;
  var answer8 = {name, value};
  var answers = [answer1, answer2, answer3, answer4, answer5, answer6,answer7,answer8];
  return answers;
}

function storeAnswersInStorage(answers){
  sessionStorage.setItem('size', answers.length);
  for(var i = 0;i<answers.length;i++){
    var tag = "boardAnswer" + i;
    var tag2 = "boardValue" + i;
    sessionStorage.setItem(tag, answers[i].name);
    sessionStorage.setItem(tag2, answers[i].value);
  }
}

function getAnswersFromStorage(){
  var size = sessionStorage.getItem('size');
  var answers = [];
  for(var i=0;i<size;i++){
    var tag = "boardAnswer" + i;
    var tag2 = "boardValue" + i;
    var name = sessionStorage.getItem(tag);
    var value = sessionStorage.getItem(tag2);
    answers.push({name,value})
  }
  sortByKey(answers, 'value');
  return answers;
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
}