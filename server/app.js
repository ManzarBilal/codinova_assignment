const express= require("express");
const app=express();
const exchanges=require("./src/routers/Exchanges");
require("./src/db/connection");
const cors=require("cors");
const PORT=5000;

app.use(cors());
app.use("/exchanges",exchanges);

app.listen(PORT,(()=>{
    console.log(`Server is listening on ${PORT}`);
}));