// The code example below uses navigator.userAgent to implement browser detection. It
// also uses navigator.appName and navigator.appVersion as a last resort only, if
// the userAgent string has an "unexpected" format. In your browser, this code produces
// the following output:

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = "" + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

// In Opera 15+, the true version is after "OPR/"
if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 6);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
  browserName = "Microsoft Internet Explorer";
  fullVersion = nAgt.substring(verOffset + 5);
}
// In Chrome, the true version is after "Chrome"
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
  browserName = "Chrome";
  fullVersion = nAgt.substring(verOffset + 7);
}
// In Safari, the true version is after "Safari" or after "Version"
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
  browserName = "Safari";
  fullVersion = nAgt.substring(verOffset + 7);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}
// In Firefox, the true version is after "Firefox"
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
  browserName = "Firefox";
  fullVersion = nAgt.substring(verOffset + 8);
}
// In most other browsers, "name/version" is at the end of userAgent
else if (
  (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))
) {
  browserName = nAgt.substring(nameOffset, verOffset);
  fullVersion = nAgt.substring(verOffset + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
    browserName = navigator.appName;
  }
}
// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
  fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
  fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt("" + fullVersion, 10);
if (isNaN(majorVersion)) {
  fullVersion = "" + parseFloat(navigator.appVersion);
  majorVersion = parseInt(navigator.appVersion, 10);
}

// document.write(''
//  +'Browser name  = '+browserName+'<br>'
//  +'Full version  = '+fullVersion+'<br>'
//  +'Major version = '+majorVersion+'<br>'
//  +'navigator.appName = '+navigator.appName+'<br>'
//  +'navigator.userAgent = '+navigator.userAgent+'<br>'
// )

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var welcome = document.getElementById("welcome");

var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
welcome.innerHTML =
  "Welcome! You are using " +
  ' "' +
  browserName +
  '" ' +
  "and your are on this page since ";

var first_name = document.forms["regForm"]["fname"];
var last_name = document.forms["regForm"]["lname"];
var date = document.forms["regForm"]["date"];
var email = document.forms["regForm"]["email"];
var checkboxes = document.forms['regForm'].querySelectorAll('input[type="checkbox"]');
var favoriteWriter = document.getElementById('favWrite');
favoriteWriter.style.visibility="hidden";

function validateForm() {
  //check First and Last Name
  var nameRegex = /^[a-zA-Z]+$/;
  if (
    nameRegex.test(first_name.value) == false ||
    nameRegex.test(last_name.value) == false
  ) {
    alert("Name must contain alphabets only without space.");
    return false;
  }

  //check date
  var dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (dateRegex.test(date.value) == false || !date.max) {

    // var newDate = new Date();
    // var localDate = newDate.toLocaleDateString();
    // var dd = localDate.getDay();
    // var mm = localDate.getMonth() + 1;
    // var yy = localDate.getFullYear();
    // var maxDate = dd + "-" + mm + "-" + yyyy;
    // console.log(maxDate);
    // date.max=maxDate;

    alert("Enter date in DD-MM-YYYY format");
    
    date.value = "";
    date.style.borderColor = "red";
    date.placeholder = "hint dd-mm-yyyy";

    
    return false;
  }

  //check email
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email.value) == false) {
    alert("Enter valid email");
    email.value = "";
    email.placeholder = "hint: someone@company.com";
    email.style.borderColor = "red";
    return false;
  }

  //select at least one checkbox
  var checkedBox = Array.prototype.slice.call(checkboxes).some(x=>x.checked);
  if (checkedBox==false) {
    alert('at least select one checkbox');
    return false;
  }else if (checkedBox.value=="reading") {
    showWriter();
  }
}

function showWriter(){
  favoriteWriter.style.visibility="visible";
  favoriteWriter.required;
}