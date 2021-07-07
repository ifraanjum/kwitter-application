var firebaseConfig = {
  apiKey: "AIzaSyB5KDHN_QJx3e3erjjRlzgxAd-kiFEAiGQ",
  authDomain: "class95-ead72.firebaseapp.com",
  databaseURL: "https://class95-ead72-default-rtdb.firebaseio.com",
  projectId: "class95-ead72",
  storageBucket: "class95-ead72.appspot.com",
  messagingSenderId: "611194102291",
  appId: "1:611194102291:web:736df2c1763614522495e6",
  measurementId: "G-HCNRN7WCLD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room"
  });
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


function getData()
 {  firebase.database().ref("/").on('value', function(snapshot)
 { 
   document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }


