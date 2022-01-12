const expres = require('express');
const { listen } = require('express/lib/application');
const res = require('express/lib/response');
const morgan = require('morgan');
const users = require("./data/users");

const port = process.env.port//5000;

const app = expres();
app.use(morgan("dev"));
app.use(expres.json());

app.get("/",(req,res)=>{
res.send("Hello World");
});

app.get("/users",(req,res)=>{
    res.status(202).json({
        status:"success",
        data:users,
    });
});

app.post("/users",(req,res)=>{
    const user= req.body;
    users.push(user);
    res.status(202).json({
        message:"User has been created",
        data:user,
    });
});
app.listen(port,()=>console.log('listening on port ${port}'));
