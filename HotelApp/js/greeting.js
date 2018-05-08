var today = new Date();
var hourNow = today.getHours();
var string;

if (hourNow >= 18) {
  string = "Good Evening!";
} else if (hourNow > 12) {
  string = "Good Afternoon!";
} else if (hourNow > 6) {
  string = "Good Morning!";
} else {
  string = "What are you doing up at this hour?!";
}

document.getElementById("jsdiv").innerHTML=string;
