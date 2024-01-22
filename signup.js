const firebaseConfig = {
    apiKey: "AIzaSyDHyeAPBMoQsvkXBlJwTnwkzJ5f_4ojETU",
    authDomain: "newphoria-e1450.firebaseapp.com",
    databaseURL: "https://newphoria-e1450-default-rtdb.firebaseio.com",
    projectId: "newphoria-e1450",
    storageBucket: "newphoria-e1450.appspot.com",
    messagingSenderId: "742999806820",
    appId: "1:742999806820:web:647fbc453fa5b16d716071",
    measurementId: "G-WHFQFMR9L9"
  };
  
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('product');

document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var formData = getFormData();

  saveMessage(formData);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById('registrationForm').reset();
}

function getFormData() {
  var formFields = ['username', 'email', 'password', 'phone number'];
  var formData = {};

  formFields.forEach(function (field) {
    formData[field] = getInputVal(field);
  });

  return formData;
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(formData) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set(formData);
}