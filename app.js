let express = require('express');
let firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyAqqx2lsK24Rs43O10hT3IRk0Qyce1F3Vs",
    authDomain: "test-ee527.firebaseapp.com",
    databaseURL: "https://test-ee527.firebaseio.com",
    projectId: "test-ee527",
    storageBucket: "test-ee527.appspot.com",
    messagingSenderId: "395022467203",
    appId: "1:395022467203:web:9d3abfda1e87d9213e5bb6",
    measurementId: "G-E46M9PGXMJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let app = express();
let get_time = function (req, res, next) {
  console.log('Time:', Date.now());
  next();
};
app.use(get_time);

app.get("/", async (req, res) => {
    var html = '';
    db.collection('ClassA').get().then(data => {
        data.forEach(doc => {
            //console.log("hello",doc.data())
            html = `${html}<div> name = ${doc.data().name} age = ${doc.data().age}</div>`;
            // console.log(html);
        });
    }).then(() => {
        console.log(html);
        res.send(html);
    });
})
app.get("/about", (req, res) => {
    res.send("/about");
});
app.listen(8888, () => {
    console.log("server listen at 127.0.0.1:8888");
});
