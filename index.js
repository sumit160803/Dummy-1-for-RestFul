const express = require("express");

const app = express();
const PORT = 8000;


//GET /users


app.listen(PORT,()=>console.log(`starting the server at ${PORT}`));