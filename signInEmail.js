firebase.initializeApp({
    apiKey: "AIzaSyCyt0dwM_Sm6oBNgXLwP8oNe2Uk1FDqXx4",
    authDomain: "ci68-project.firebaseapp.com",
    projectId: "ci68-project"
});

var db = firebase.firestore();

document.getElementById("user-email").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        emailCheck();
        // Do more work
    }
});

let btn = document.getElementById("btn");
function emailCheck () {
    
    let email = document.getElementById("user-email").value;
    // get du lieu email
    let result = "";
    db.collection("users").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data());

            if (email === doc.data().email) {
                result = email;
            }

        });
        if (result != "") {
            console.log("ok");
            window.location = "signInPass.html";
        } else {
            alert("khong ton tai email");
        }
    });
}

btn.addEventListener("click", emailCheck);

