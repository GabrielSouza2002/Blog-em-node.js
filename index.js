const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");


//view engine
app.set('view engine','ejs');

//static
app.use(express.static('public'));

//Body parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) =>{
        console.log(error);
    })

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8080, () =>{
    console.log("O servidor esta rodando!")
})