//firebase config
firebase.initializeApp({
    apiKey: "AIzaSyCyt0dwM_Sm6oBNgXLwP8oNe2Uk1FDqXx4",
    authDomain: "ci68-project.firebaseapp.com",
    projectId: "ci68-project"
});

var db = firebase.firestore();


// Event Enter
document.getElementById("user-pass").addEventListener("keydown", function(event) {
    console.log(event.value);
    if (event.key === "Enter") {
        passCheck();
    }
});

let btn = document.getElementById("btn");

// check Password
function passCheck () {
    let user_pass = document.getElementById("user-pass").value;
    // get du lieu password
    let result = "";
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data());

            if (user_pass === doc.data().password) {
                result = user_pass;
            }
        });
        if (result != "") {
            window.location.pathname = "./home/index.html";
        } else {
            alert("Wrong password");
        }
    });
}

btn.addEventListener("click", passCheck);

