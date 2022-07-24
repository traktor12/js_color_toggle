const body = document.getElementsByTagName("BODY")[0];

const dropMenu = document.getElementById("dropMenu");
const menuIcon = document.getElementById("menuIcon");
const menuAll = document.getElementById("menu");

const currentColor = document.getElementById("pickedColor");

//All li's
const menuLi = document.querySelectorAll("li");
const gray = document.getElementById("liGray");
const red = document.getElementById("liRed");
const green = document.getElementById("liGreen");
const orange = document.getElementById("liOrange");
const purple = document.getElementById("liPurple");

//Background colors
const colorGray = "#D9D9D9";
const colorRed = "#FD0000";
const colorGreen = "#0FFD00";
const colorOrange = "#F9AC00";
const colorPurple = "#952B8F";

//Background color texts
const isGray = "Current color is gray ( " + colorGray + " )";
const isRed = "Current color is red ( " + colorRed + " )";
const isGreen = "Current color is green ( " + colorGreen + " )";
const isOrange = "Current color is orange ( " + colorOrange + " )";
const isPurple = "Current color is purple ( " + colorPurple + " )";

//Startup
currentColor.innerHTML = isGray;
document.body.style.backgroundColor = colorGray;

gray.style.backgroundColor = colorGray;
red.style.backgroundColor = colorRed;
green.style.backgroundColor = colorGreen;
orange.style.backgroundColor = colorOrange;
purple.style.backgroundColor = colorPurple;

//Functions
function show() {
  if (dropMenu.style.visibility == "hidden") {
    dropMenu.style.visibility = "visible";
    menuLi.forEach(function (x) {
      x.style.height = "40px";
      x.style.padding = "20px 0 0 12px";
      x.style.fontSize = "16px";
    });
  }
}

function hide() {
  if (dropMenu.style.visibility !== "hidden") {
    dropMenu.style.visibility = "hidden";
    menuLi.forEach((el) => {
      el.style.height = "0px";
      el.style.padding = "0 0 0 12px";
      el.style.fontSize = "0px";
    });
  }
}

function menuDrop() {
  if (dropMenu.style.visibility !== "hidden") {
  hide();
}
else if (dropMenu.style.visibility == "hidden") {
  show();
}
}

//Dropdown menu events
menuIcon.addEventListener("mouseenter", show);
menuIcon.addEventListener("click", menuDrop);
menuAll.addEventListener("mouseleave", hide);
hide();

//Color pick click events
gray.addEventListener("click", function () {
  document.body.style.backgroundColor = colorGray;
  currentColor.innerHTML = isGray;
  hide();
});

red.addEventListener("click", function () {
  document.body.style.backgroundColor = colorRed;
  currentColor.innerHTML = isRed;
  hide();
});
green.addEventListener("click", function () {
  document.body.style.backgroundColor = colorGreen;
  currentColor.innerHTML = isGreen;
  hide();
});
orange.addEventListener("click", function () {
  document.body.style.backgroundColor = colorOrange;
  currentColor.innerHTML = isOrange;
  hide();
});
purple.addEventListener("click", function () {
  document.body.style.backgroundColor = colorPurple;
  currentColor.innerHTML = isPurple;
  hide();
});

//Keyboard input events
document.addEventListener("keypress", function (i) {
  let x = i.key;
  console.log(i);
  console.log("Your input is: ", x);
  if (x === "1") {
    document.body.style.backgroundColor = colorGray;
    currentColor.innerHTML = isGray;
  }
  if (x === "2") {
    document.body.style.backgroundColor = colorRed;
    currentColor.innerHTML = isRed;
  }
  if (x === "3") {
    document.body.style.backgroundColor = colorOrange;
    currentColor.innerHTML = isOrange;
  }
  if (x === "4") {
    document.body.style.backgroundColor = colorPurple;
    currentColor.innerHTML = isPurple;
  }
  if (x === "5") {
    document.body.style.backgroundColor = colorGreen;
    currentColor.innerHTML = isGreen;
  }
});
