const express = require('express');
const app = express();
const PORT = 3001;
 
// View engine setup
app.set('view engine', 'ejs');
 
// Without middleware
app.get('/user', function (req, res) {
 
    // Rendering home.ejs page
    res.render('home');
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});