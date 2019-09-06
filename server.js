const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const uri =process.env.DB_URI;

mongoose.connect(uri,{useCreateIndex:true, useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',()=>console.log("DB connected"));

app.listen(PORT,()=>console.log("Server running"));