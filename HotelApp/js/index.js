function Hotel(name, rooms, available) {
  this.name = name;
  this.rooms = rooms;
  this.available = available;

  this.getRooms = function() {
    return this.rooms;
  }
  this.getAvailable = function() {
    return this.available;
  }
  this.getName = function() {
    return this.name;
  }
}

var hotels = [];
hotels.push(new Hotel('max', 100, 53));
hotels.push(new Hotel('lauren', 40, 12));
hotels.push(new Hotel('sheldon', 700, 2));
hotels.push(new Hotel('kristie', 100020, 0));
hotels.push(new Hotel('mongo', 2, 2));

var displayHotelInfo = function(elem) {
  var name, rooms, available;
  for (var i = 0; i < hotels.length; i++) {
    if (hotels[i].name === elem.id) {
      name = hotels[i].name;
      rooms = hotels[i].rooms;
      available = hotels[i].available;
    }
  }
  
  document.getElementById("jsdiv").innerHTML = "<p>Name: " + name + "</p><p> Rooms Available: " + available + "/" + rooms + "</p>";
  //var e = document.getElementById(elem);
  /*if ([max["rooms"]) {
    document.getElementById("jsdiv").innerHTML = "Hotel Max Num Rooms: " + max["rooms"];
  }*/
}
//var hotels = document.getElementsByClassName("hotel");

//for (var i = 0; i < hotels.length; i++) {
  //hotels[i].onclick = displayHotelInfo;
  /*hotels[i].addEventListener('click',
    function() {
      hotels[i].innerHTML = "YOOO";
    }
  );*/
//}


//document.getElementById("hotelMax").textContent = "HEY";
//document.getElementById("hotelMax").onclick = displayHotelInfo;
