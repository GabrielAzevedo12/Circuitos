const express = require('express');
const app = express();
const PORT = 3001;
// this middleware will not allow the request to go beyond it

app.use(function (req, res, next) {
     res.send('Hello World')
  })

// requests will never reach this route
app.get('/', function (req, res) {
     res.send('Welcome')
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
