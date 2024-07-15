document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem('rememberMe') === 'true') {
      document.getElementById('rememberMe').checked = true;
  }
});

function lsRememberMe() {
  var rememberMeCheckbox = document.getElementById('rememberMe');
  localStorage.setItem('rememberMe', rememberMeCheckbox.checked);
}

function getGreetingMessage(name) {
  var now = new Date();
  var hours = now.getHours();
  var greeting;

  if (hours < 12) {
      greeting = "Good morning,";
  } else if (hours < 18) {
      greeting = "Good afternoon,";
  } else {
      greeting = "Good evening,";
  }

  return `${greeting} ${name}!`;
}

function login() {
  var username = document.getElementById('uname').value;
  var password = document.getElementById('pwd').value;
  var rememberMeCheckbox = document.getElementById('rememberMe').checked;

  var headerText = document.getElementById('headerText');

  // Überprüfen der Anmeldedaten
  if (username === 'mvogl' && password === '123456') {
      headerText.textContent = getGreetingMessage("Michael");
      if (rememberMeCheckbox) {
          lsRememberMe();
      }
  } else if (username === 'mmomirov' && password === '123456') {
      headerText.textContent = getGreetingMessage("Mario");
      if (rememberMeCheckbox) {
          lsRememberMe();
      }
  } else {
      headerText.textContent = "Invalid username or password";
  }
}
