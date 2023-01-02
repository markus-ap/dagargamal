function daysSince(datetimeString) {
  // Convert the datetime string to a JavaScript Date object
  var datetime = new Date(datetimeString);
  // Get the current time
  var now = new Date();
  // Calculate the difference in milliseconds
  var diff = now - datetime;
  
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  // Convert the difference to days and return the result
  return "Du er " + days + " dagar gamal.";
}

function regn_ut(){
  var input = document.getElementById('bursdag');
  var melding = daysSince(input.value);
  document.getElementById("dagar").innerHTML = melding;
}
