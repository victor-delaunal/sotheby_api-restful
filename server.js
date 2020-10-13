const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { urlencoded } = require('body-parser')

const app =  express()
// const 

mongoose.set("useUnifiedTopology", true)
mongoose.connect('mongodb://localhost/sothebyDB', {useNewUrlParser: true});

app.use(bodyParser, urlencoded({extended: false}))
const { Schema } = mongoose
const paintingSchema = new Schema ({
    name: String,
    author: String,
    price: Number
})
const Painting = mongoose.model("paintingSold", paintingSchema)

app.set("view engine", 'ejs')
app.set(express.static("public"))
app.get('/', (req, res) => {
    res.render("index", {})
})


app.listen(3000, () => {
    console.log("démarrage serveur sur port 3000...")
    console.log("body-parser pret")
    console.log("ejs prêt")
    console.log(`Base de données ${"sothebyDB"} initialisée`)
    console.log(` - collection ${"paintingSold"} prête`)
    console.log('Paré au décollage ... \n')
})