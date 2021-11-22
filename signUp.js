// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCyt0dwM_Sm6oBNgXLwP8oNe2Uk1FDqXx4",
    authDomain: "ci68-project.firebaseapp.com",
    projectId: "ci68-project"
});

var db = firebase.firestore();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyt0dwM_Sm6oBNgXLwP8oNe2Uk1FDqXx4",
    authDomain: "ci68-project.firebaseapp.com",
    projectId: "ci68-project",
    storageBucket: "ci68-project.appspot.com",
    messagingSenderId: "859375462600",
    appId: "1:859375462600:web:3b40aa15d975280da25dfd",
    measurementId: "G-1FNEE33CV8"
};

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let name = document.getElementById("user-firstname").value + " " + document.getElementById("user-lastname").value
    let email = document.getElementById("user-email").value;
    let pass = document.getElementById("user-pass").value;
    let confirm = document.getElementById("user-cfpass").value;

    if (confirm !== pass) {
        alert("confirm password failed");
    } else {
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
                let check = 1;
                if (result != "") {
                    alert("da ton tai email");
                } else {
                    console.log("ok");
                    db.collection("users").add({
                        "name": name,
                        "email": email,
                        "password": pass
                    })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .then(()=>{
                        window.location = "signInEmail.html";
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                    console.log("alo");
                    check = 2;
                }
            });
    };
    console.log(name, email, pass);
});
console.log(document.getElementById("user-cfpass").value);
