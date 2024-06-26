let counter = 0;
let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let a = document.getElementById("content");
let sum = 0;
function startt() {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      a.innerHTML =
        '<h1 id="question">' +
        data.questions[0].question +
        "</h1>" +
        "<hr>" +
        '<div class="row">' +
        '<div class="col-md-6">' +
        '<button id="answer1" value="' +
        data.questions[0].answerpoint1 +
        '" onclick="answer1();">' +
        data.questions[0].answer1 +
        "</button>" +
        "</div>" +
        '<div class="col-md-6">' +
        '<button id="answer2" value="' +
        data.questions[0].answerpoint2 +
        '" onclick="answer2();">' +
        data.questions[0].answer2 +
        "</button>" +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div class="col-md-12">' +
        '<button id="answer3" value="' +
        data.questions[0].answerpoint3 +
        '" onclick="answer3();">' +
        data.questions[0].answer3 +
        "</button>" +
        "</div>" +
        "</div>" +
        '<div id="backandnext">' +
        '<img id="hoverr" onclick="back();" src="img/back.png" alt="back">' +
        '<img id="hoverr" onclick="next();" src="img/next.png" alt="next">' +
        "</div>";
    });

  document.getElementById("stylee").innerHTML =
    "#backandnext img {" +
    "width: 48px;" +
    "margin-top: 1%;" +
    "margin-bottom: 1%;" +
    "margin-right: 1%;" +
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
    "padding: 20px" +
    "}" +
    ".row button {" +
    "background-color: rgba(26, 51, 49, 0.8);" +
    "border-radius: 15px;" +
    "border: 0;" +
    "color: white;" +
    "margin: 10px;" +
    "padding: 20px" +
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
    "}";
}

function next() {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      if (score[counter] != 0) {
        counter++;
        if (13 > counter) {
          document.getElementById("answer1").innerHTML =
            data.questions[counter].answer1;
          document.getElementById("answer2").innerHTML =
            data.questions[counter].answer2;
          document.getElementById("answer3").innerHTML =
            data.questions[counter].answer3;
          document.getElementById("question").innerHTML =
            data.questions[counter].question;

          document.getElementById("answer1").value =
            data.questions[counter].answerpoint1;
          document.getElementById("answer2").value =
            data.questions[counter].answerpoint2;
          document.getElementById("answer3").value =
            data.questions[counter].answerpoint3;
        } else {
          counter--;

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
        document.getElementById("answer1").innerHTML =
          data.questions[counter].answer1;
        document.getElementById("answer2").innerHTML =
          data.questions[counter].answer2;
        document.getElementById("answer3").innerHTML =
          data.questions[counter].answer3;
        document.getElementById("question").innerHTML =
          data.questions[counter].question;

        document.getElementById("answer1").value =
          data.questions[counter].answerpoint1;
        document.getElementById("answer2").value =
          data.questions[counter].answerpoint2;
        document.getElementById("answer3").value =
          data.questions[counter].answerpoint3;
      }
    });
}

function answer1() {
  score[counter] = parseInt(document.getElementById("answer1").value);
  console.log(score);
  next();
}

function answer2() {
  score[counter] = parseInt(document.getElementById("answer2").value);
  console.log(score);
  next();
}

function answer3() {
  score[counter] = parseInt(document.getElementById("answer3").value);
  console.log(score);
  next();
}

function endScreen() {
  document.getElementById("stylee").innerHTML = "";

  a.innerHTML =
    '<div class="row">' +
    '<div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">' +
    '<img src="img/floating_burger.png" class="img-fluid" alt="Hamburger kép" />' +
    "</div>" +
    '<div class="col-lg-8 col-md-6 col-sm-12 d-flex align-items-center text-center">' +
    '<div class="row">' +
    '<p class="box" id="here">' +
    "</p>" +
    "</div>";
  ("</div>");

  if (21 < sum && sum < 31) {
    document.getElementById("here").innerHTML =
      "Jó úton jársz, de még van mit javítani az étkezéseden. Figyelj a rost és a megfelelő fehérje bevitelre (hal, pulyka vagy csirke legyen a fő és a hüvelyes zöldségek). Nézz utána a mediterrán étrendnek, a tested meg fogja hálálni. A nassolást, amennyire lehet, mellőzd. A nyugodt alváshoz pedig elengedhetetlen a jó környezet, a sötét szoba. Nyugi, nincs szörny az ágy alatt. ;)";
  } else if (12 < sum && sum < 22) {
    document.getElementById("here").innerHTML =
      "Gratulálunk, te tudod, hogy kell igazán egészségesen élni. Ami nagyon fontos, hogy továbbra is figyelj oda a megfelelő hidratálásra és a rostbevitelre. Ha még nem próbáltad, akkor itt az ideje kipróbálni az alternatív fehérje megoldásokat is. Szuper egészséges és finom tud lenni. Egyre vigyázz, azért ne hajtsd túl magad. ;)";
  } else {
    document.getElementById("here").innerHTML =
      "Ajjaj, nagy a baj. Nem figyelsz az étkezésedre. Ha ezen nem változtatsz, komoly egészségügyi következményei is lehetnek (mint a cukorbetegség, a magas vérnyomás vagy a korai csontritkulás)." +
      "<br> <br>" +
      "Légy tudatos, egy életünk van. Javasoljuk, hogy a gyorsan felszívódó szénhidrátokat (vagy épp a szupergyorsan felszívódókat) -mint a nassok, sütemények, krumpli, rizs- cseréld lassan felszívódó szénhidrátokra – basmati rizs, hajdina, köles, kuszkusz- és fogyassz elég folyadékot. Minden nap legalább egy 4km-es távot sétálj le gyorssétával. Ha azt érzed, hogy nehézkes az alvás, akkor lefekvés előtt egy 30 perccel már ne nézz tv-t és ne használd a telefonodat sem. Így nyugodtabb lesz az alvásod és másnap nem kelsz fáradtan, ami miatt amúgy összezabálsz mindent.";
  }
}
