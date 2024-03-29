const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemsRouter = require("./routes/items");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://admin:xGOFn612fcttvrj9@cluster0.ucfp8.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Database connection established succesfully");
});

app.use('/items', itemsRouter);

app.get('/', function(req, res) {
    res.send('Olá Mundo!');
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})