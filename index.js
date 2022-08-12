'use strict'

const express = require('express'); 
const bodyParser = require('body-parser');

require('dotenv').config();

var cors = require('cors');
const cors_option = {
	origin: true,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true,
	exposedHeaders: ["x-auth-token"]
};
var app = express();
let router = express.Router();

app.use(cors(cors_option));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));



app.get('/',(req,res)=>res.send("Hello World"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log("server running in port " + port);
});
