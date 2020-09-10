// Loginのパート

var myUsername;
var myPassword;

function captureEmail(event) {
  myUsername = event.target.value;
}

function capturePassword(event) {
  myPassword = event.target.value;
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  if (myUsername == "m@hotmail.com" && myPassword == "dietgogo") {
    console.log("YOU SIGNED IN");
  } else {
    console.log("BAD PSWD");
  }
});

// CheckboxからのImg消えるイリュージョン

var kata = document.getElementById("apple");
var stat = false;
var kata2 = document.getElementById("pear");
var stat = false;
var kata3 = document.getElementById("boxtype");
var stat = false;

function func1() {
  if(stat) {
  kata.classList.add("off");
  kata.classList.remove("on");
  // kata2.classList.add("on");
  // kata2.classList.remove("off");
  } else {
  kata.classList.add("on");
  kata.classList.remove("off");
  }
  stat = !stat;
}


function func2() {
  if(stat) {
  kata2.classList.add("off");
  kata2.classList.remove("on");
  } else {
  kata2.classList.add("on");
  kata2.classList.remove("off");
  }
  stat = !stat;
}


function func3() {
  if(stat) {
  kata3.classList.add("off");
  kata3.classList.remove("on");
  } else {
  kata3.classList.add("on");
  kata3.classList.remove("off");
  }
  stat = !stat;
}


// Diaryの記入。Dateの入れ方まだ

{
document.getElementById("osu").addEventListener("click", () => {
  var li = document.createElement("li");
  // var date = document.getElementById("toki")
  var text = document.getElementById("blog");
  li.textContent = text.value;
  document.getElementById("empty").appendChild(li);

  text.value = "";
  text.focus();
});
}

// Topへ戻るボタン

   
  scrollTop("js-button", 500);

  function scrollTop(elem, duration) {
    var target = document.getElementById(elem);
    target.addEventListener("click", function() {
    var currentY = window.pageYOffset;
    var step = duration/currentY > 1 ? 10 : 100;
    var timeStep = duration/currentY * step;
    var intervalID = setInterval(scrollUp,timeStep);

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0){
        clearInterval(intervalID);
      } else {
        scrollBy( 0, -step );
      }
    }
    });
  }
