const milepælar = []

for (let i = 1000; i <= 60000; i += 1000) {
  milepælar.push(i);
}

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

  let melding = "Du er " + tusenendedelar(days) + " dagar gamal.<br><p id='ekstrainfo'>";

  for(var indeks in milepælar){
    const milepæl = milepælar[indeks];

    if(days < milepæl){
      melding += ekstrainfo(datetime, milepæl);
      break;
    }

  }
  // Convert the difference to days and return the result
  return melding + "</p>";
}

function ekstrainfo(datetime, dagar){
  return "<br>Du blir " + tusenendedelar(dagar) + " dagar<br>" + daysAfter(datetime, dagar);
}

function regn_ut(){
  var input = document.getElementById('bursdag');
  var melding = daysSince(input.value);
  document.getElementById("dagar").innerHTML = melding;
}

function tusenendedelar(nummer) {
  // Use a regular expression to add commas as the thousands separator
  return nummer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function daysAfter(startDate, numDays) {
  // Create a new Date object representing the start date
  const date = new Date(startDate);

  // Add the number of days to the date
  date.setDate(date.getDate() + numDays);

    // Get the year, month, and day from the date
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
  
    // Convert the month to a Norwegian string
    const monthString = [
      "januar", "februar", "mars", 
      "april", "mai", "juni", "juli", 
      "august", "september", "oktober", 
      "november", "desember"][month];

  // Return the resulting date
  return day + ". " + monthString + " " + year;
}
