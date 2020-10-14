let express = require('express');
let firebase = require('firebase')
var firebaseConfig = {
  apiKey: "AIzaSyARV9jx7i9_qCjWrQ047KFe0v5oc2sHvF8",
  authDomain: "test3-5d728.firebaseapp.com",
  databaseURL: "https://test3-5d728.firebaseio.com",
  projectId: "test3-5d728",
  storageBucket: "test3-5d728.appspot.com",
  messagingSenderId: "116079344369",
  appId: "1:116079344369:web:21e20e09c48f7245a2c750",
  measurementId: "G-GEPW61XXKW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    let data = {
        name: 'Edward',
        age: '<p><b> 20 </b><p>',
        friends: ["Alice", "Bob", "Fisheep", "Fiona"]
    }
    res.render('index', data);
});

app.get('/database', function (req, res) {
  let data = { 
  }
  let html_data = [];
    db.collection('ClassA').get().then(data => {
      data.forEach(doc => {
        console.log(doc.data())
        html_data.push({
            name:doc.data().name, 
            age:doc.data().age
        });
        // console.log(html);
      });
    }).then(() => {
      data["html_data"] = html_data;
      res.render("database", data);
    });
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});