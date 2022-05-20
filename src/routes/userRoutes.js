const express = require('express');
const router = new express.Router();
const Users = require('../model/user');

router.post("/users", async (req,res)=>{
    
    const user = new Users(req.body);
    
    try {
    
        await user.save();
        res.status(201).send(user);
    
    } catch (error) {
        res.status(400).send(error);
        
    }
    
});

router.get("/users",async (req,res)=>{

    try {
        const all_users = await Users.find();
        if(!all_users){
            res.send("No users found");    
        }
        res.send(all_users);

    } catch (error) {
     
        res.send(error);   
    }
});

router.get("/users/:id", async(req,res)=>{

    const id = req.params.id;
    
    try {
        const user = await Users.findById(id);
        if(!user){
            res.status(401).send();
        }
        res.send(user);
    } catch (error) {
     
        res.send(error);   
    }

});


router.patch("/users/:id", async (req,res)=>{
    const updateKeys = Object.keys(req.body);
    const limits = ['name',"age","email","password"];
    const validationUpdate = updateKeys.every(update => limits.includes(update));

    if(!validationUpdate){
        return res.send("Invalid key");
    }

    try {
        const updated_user = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!updated_user){

          return  res.status(400).send("user not found");      
        }
        
        return req.send(updated_user);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/users/:id", async(req,res)=>{
    
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send("No such user");
        }
        res.send(user);    
    } catch (error) {
        res.send(error);
    }
});

module.exports =  router;