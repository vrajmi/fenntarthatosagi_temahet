let counter = 0;
let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let a = document.getElementById("content");
let sum = 0;
function startt() {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      a.innerHTML = '<h1 id="question">' + data.questions[0].question + '</h1>' +
        '<hr>' +
        '<div class="row">' +
        '<div class="col-md-6">' +
        '<button id="answer1" value="' + data.questions[0].answerpoint1 + '" onclick="answer1();">' + data.questions[0].answer1 + '</button>' +
        '</div>' +
        '<div class="col-md-6">' +
        '<button id="answer2" value="' + data.questions[0].answerpoint2 + '" onclick="answer2();">' + data.questions[0].answer2 + '</button>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-md-12">' +
        '<button id="answer3" value="' + data.questions[0].answerpoint3 + '" onclick="answer3();">' + data.questions[0].answer3 + '</button>' +
        '</div>' +
        '</div>' +
        '<div id="backandnext">' +
        '<img id="hoverr" onclick="back();" src="img/back.png" alt="back">' +
        '<img id="hoverr" onclick="next();" src="img/next.png" alt="next">' +
        '</div>'
    });
  document.getElementById("stylee").innerHTML =
    "#backandnext img {" +
    "width: 48px;" +
    "margin-top: 1%;" +
    "margin-bottom: 1%;" +
    "}" +
    "#hoverr:hover {" +
    "opacity: 0.7;" +
    "cursor: pointer" +
    "}" +
    "main {" +
    "color: white;" +
    "text-align: center;" +
    "background-color: rgba(38, 74, 71, 0.9);" +
    "border-radius: 15px;" +
    "box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);" +
    "}" +
    ".row button {" +
    "background-color: rgba(26, 51, 49, 0.8);" +
    "border-radius: 15px;" +
    "border: 0;" +
    "color: white;" +
    "margin: 10px;" +
    "width: 350px;" +
    "height: 100px;" +
    "}" +
    ".row button:hover {" +
    "opacity: 0.7;" +
    "cursor: pointer" +
    "}" +
    ".container {" +
    "max-width: 1000px;" +
    "}" +
    "@media(max-width: 1110px) {" +
    ".container {" +
    "margin-left: 5 %;" +
    "}" +
    "}"
}
function next() {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      if (score[counter] != 0) {
        counter++;
        if (13 > counter) {
          document.getElementById("answer1").innerHTML = data.questions[counter].answer1
          document.getElementById("answer2").innerHTML = data.questions[counter].answer2
          document.getElementById("answer3").innerHTML = data.questions[counter].answer3
          document.getElementById("question").innerHTML = data.questions[counter].question
        }
        else {
          counter--

          for (let i = 0; i < score.length; i++) {
            sum += parseInt(score[i]);
          }
          endScreen();
        }
      } else {
        alert("Válassz egyet!");
      }
    });
}
function back() {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      if (counter != 0) {
        counter--;
        document.getElementById("answer1").innerHTML = data.questions[counter].answer1
        document.getElementById("answer2").innerHTML = data.questions[counter].answer2
        document.getElementById("answer3").innerHTML = data.questions[counter].answer3
        document.getElementById("question").innerHTML = data.questions[counter].question
      }
    });
}
function answer1() {
  score[counter] = parseInt(document.getElementById("answer1").value)
  console.log(score)
  next();
}
function answer2() {
  score[counter] = parseInt(document.getElementById("answer2").value)
  console.log(score)
  next();
}
function answer3() {
  score[counter] = parseInt(document.getElementById("answer3").value)
  console.log(score)
  next();
}
function endScreen(){
  document.getElementById("stylee").innerHTML=""; //Ebbe rkhatsz plusz csst amit szeretnél. Ha az alap csst akarod használni amit rajmund összerakott akkor hagy így mert így törli ki azt amit én raktam össze.
  a.innerHTML = ''+sum+''//Ide kell beraknod azt hogy mit szeretnél látni a vége résznél
}