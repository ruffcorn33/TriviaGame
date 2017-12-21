$(document).ready(function(){

  var wins;
  var losses;
  var correctAnswer = "";
  var geographyQ = [];

  function triviaObj(question, guesses, answer){
    this.question = question;
    this.guesses = guesses;
    this.answer = answer;

  };

  geographyQ[0] = new triviaObj("What island state was formerly known by the name Formosa?", ["Japan", "Sri Lanka", "Taiwan"], "2");
  geographyQ[1] = new triviaObj("Is Africa...", ["...a country?", "...a continent?", "...an island?"], "1");
  geographyQ[2] = new triviaObj("Which country has the highest life expectancy?", ["Monaco", "The United States", "China"], "0");
  geographyQ[3] = new triviaObj("Where is Mexico?", ["North America", "Central America", "South America"], "0");
  geographyQ[4] = new triviaObj("Which country has the most lakes?", ["Finland", "The Philippines", "Canada"], "2");

  $('#startScreen').show();
  $('#gameScreen').hide();
  $("#scoreScreen").hide();

  function init() {
    wins = 0;
    losses = 0;
    // on Start button click, hide start screen and show game screen
    $('#startScreen').remove();
    $('#gameScreen').show();
    $('#scoreScreen').hide();
  };

  function showScore() {
    $('#gameScreen').hide();
    $("#winScore").text(wins);
    $("#lossScore").text(losses);
    seconds = 5;
    var intervalId = setInterval(function(){
      if (seconds >= 0) {
        $("#scoreScreen").show();
        seconds--;
      }  
    }, 1000);
  };

  $('#startBtn').click(function(){
    init();
    for (i = 0; i < geographyQ.length; i++) {
      buildTriviaCard(i);
    };
  });

  function buildTriviaCard() {
    $('#question').text(geographyQ[i].question);
    correctAnswer = geographyQ[i].answer;
    var ul = document.createElement("ul"), li, ac, tx;
    for (var j = 0; j < 3; j++) {
      li = document.createElement("li");
      bu = document.createElement("button");
      tx = document.createTextNode(geographyQ[i].guesses[j]);
      bu.setAttribute('class', "ui-btn choice m-2");
      bu.setAttribute('value', j);
      bu.appendChild(tx);
      li.appendChild(bu);
      ul.appendChild(li);
    }
    answers.innerHTML = "";
    answers.appendChild(ul);
    var seconds = 30;
    var guess;
    var intervalId = setInterval(function(){
      if (seconds >= 0) {
        $('.choice').click(function() {
          console.log("choice button clicked");
          guess = $(this).attr('value');
          if (guess === correctAnswer) {
            wins++;
            clearInterval(intervalId);
            showScore();
            return;
          }
          else {
            losses++;
            clearInterval(intervalId);
            showScore();
            return;
          }
        })
        $('#timer').text(seconds--);
      }
      else {
        losses++;
        clearInterval(intervalId);
        showScore();
        return;
      }
    }, 1000);
  };


});
