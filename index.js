const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


//GET /users
app.get("/users",(req,res)=>{
    res.json(users);
})

app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
})

// other methods like PATCH POST and DELETE will be done baad mei wooohoooo

app.listen(PORT,()=>console.log(`starting the server at ${PORT}`));