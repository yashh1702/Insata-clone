require("dotenv").config()
const app = require("./src/app.js")
const connectToDatabase = require("./src/config/database.js")

connectToDatabase()

app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})