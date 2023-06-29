const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept" );
    next();
})
app.get("/", async (req, res) => {
  try {
    res.send("Hello World");
    console.log("Hello World");
  } catch (err) {
    console.log(err);
  }
});
mongoDB();
app.use(express.json());
app.use('/api',require("./Routes/Createuser"));
app.use('/api',require("./Routes/DisplayData"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//if (typeof options === 'function' || (arguments.length >= 3 && typeof arguments[2] === 'function')) {
//   throw new MongooseError('Mongoose.prototype.connect() no longer accepts a callback');
// }