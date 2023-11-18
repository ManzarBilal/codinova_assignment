const express= require("express");
const router=express.Router();
const axios = require("axios");
const Exchange=require("../models/ExchangesModel");

const API_KEY="FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9"

const headers={
    headers:{
        "X-CoinAPI-Key":API_KEY
    }
} 

router.get("/get-exchanges",async(req,res)=>{
      try{
         const response = await axios.get("https://rest.coinapi.io/v1/exchanges",headers);
         const {data}=response;

         const iconsResponse = await axios.get('https://rest.coinapi.io/v1/exchanges/icons/32',headers);
         const iconsData = iconsResponse.data;

         data.forEach(element => {
            const icon=iconsData.find(ic=> ic.exchange_id===element.exchange_id);
            if(icon){
                element.iconUrl=icon.url;
            }
         });
         
         await Exchange.deleteMany({})
         await Exchange.insertMany(data);
         
         res.status(200).send("Updated");
      }catch(err){
        res.status(500).send(err);
      }
});

router.get("/get-exchanges-list",async(req,res)=>{
    try{
        const page = +req.query.page || 1;
        const name= req.query.name;
        const limit = +req.query.limit || 10;
        const startIndex = (page -1) * limit;

        let query = {};
        if (name && name !== 'undefined') {
            query = { name: { $regex: new RegExp(name, "i") } }; // Search by name case-insensitive
        }

       const data = await Exchange.find(query).sort({volume_1day_usd:-1}).skip(startIndex).limit(limit);
       
       res.status(200).send(data);
    }catch(err){
      res.status(500).send(err);
    }
});

module.exports=router;