function daysSince(datetimeString) {
  // Convert the datetime string to a JavaScript Date object
  var datetime = new Date(datetimeString);
  // Get the current time
  var now = new Date();
  // Calculate the difference in milliseconds
  var diff = now - datetime;
  // Convert the difference to days and return the result
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function regn_ut(){
  var input = document.getElementById('bursdag');
  var days = daysSince(input.value);
  var dagar = daysSince(days);
  document.getElementById("dagar").innerHTML = dagar + " dagar";
}