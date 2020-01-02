/*var birds = require('./birds')

// ...

const express = require('express');
const app = express();
app.listen(3000 , () => {
    console.log("Listening");
})
app.use('/birds', birds)
*/

/*var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
 */


 const express = require('express');
 const app = express();

 app.listen(3000);
 app.get('/' , (res , req , next) => {
     console.log("1st");
     next();
 },(res , req) => {
     console.log("2nd");

 })


