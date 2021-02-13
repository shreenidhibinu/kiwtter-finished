
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var config= {
      apiKey: "AIzaSyB7vw9jeNCEkhMGlYGFPVQbzrjUev1SrEY",
    authDomain: "kwitter-c5700.firebaseapp.com",
    databaseURL: "https://kwitter-c5700-default-rtdb.firebaseio.com",
    projectId: "kwitter-c5700",
    storageBucket: "kwitter-c5700.appspot.com",
    messagingSenderId: "861444040922",
    appId: "1:861444040922:web:ef03eda039947753aa1de3"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
  function addroom(){
    Room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
      purpose:"adding room name"
  });
  localStorage.setItem("room_name",Room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+" </div><hr>";
       document.getElementById("output").innerHTML+=row;
      
       //Start code

      //End code
      });});}
getData();
function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
