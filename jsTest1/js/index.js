var header = document.getElementById("header");
var output = document.getElementById("jsOutput");

output.textContent = header.firstChild.nodeValue;
//output.className = header.className;

header.className = 'red';

var paragraphs = document.getElementsByClassName("paragraph");
if (paragraphs.length > 0) {
  var first = paragraphs[0];
}

//var listItems = document.querySelectorAll(".blue");
var listItems = document.getElementsByClassName("blue");
while (listItems.length > 0) {
  listItems[0].className = 'red';
}

listItems = document.querySelectorAll("li.red");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].className = "blue";
}

output.textContent = listItems.length;

//adding an element with DOM manipulation
var newElem = document.createElement("li");
var newText = document.createTextNode("madeline");
newElem.appendChild(newText);
newElem.className = "blue";
var position = document.getElementsByTagName("ul")[1];
position.appendChild(newElem);
//output.textContent = document.getElementById("nav").textContent;

//document.getElementsByTagName("body")[0].innerHTML = "hey";

function a(e) {
  alert(e.target.innerHTML);
}

var maxLi = document.getElementsByTagName("li")[0];
maxLi.addEventListener('click', function(e) {
  a(e);
});


function listClick(e) {
  var target = e.target;
  if (target.textContent === "clicked") {
    target.textContent = "unclicked";
  } else {
    target.textContent = "clicked";
  }
}

document.getElementsByTagName("ul")[1].addEventListener('click', function(e) {
  listClick(e);
});


function displayMouseInfo(e) {
  document.getElementById("sx").innerHTML = e.screenX;
  document.getElementById("sy").innerHTML = e.screenY;
  document.getElementById("px").innerHTML = e.pageX;
  document.getElementById("py").innerHTML = e.pageY;
  document.getElementById("cx").innerHTML = e.clientX;
  document.getElementById("cy").innerHTML = e.clientY;
}

document.getElementsByTagName("html")[0].addEventListener('mousemove', function(e) {
  displayMouseInfo(e);
});
