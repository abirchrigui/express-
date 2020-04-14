const express = require('express') ;
const hbs = require("hbs");
const app=express();
let hours = new Date().getHours()
  

app.set('view engine', hbs)



// Condition


app.get('/', (req, res)=> {
     ( (hours >8) && (hours <17) ) ? res.sendFile(__dirname + '/public/home.html')

    :res.send("<h1> Our office is not open </h1>");
  })

// Static 
app.use(express.static(__dirname + '/public'));

// Port

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000 ");
});