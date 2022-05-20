const express = require('express');
const router = new express.Router();

//models
const Tasks = require('../model/tasks');

router.post("/tasks",async (req,res)=>{
    
    const new_task = new Tasks(req.body);

    try {
        await new_task.save();
        res.status(201).send(new_task);
    
    } catch (error) {
        res.status(400).send(error);
        
    }
    
});


/*tasks*/
router.get("/tasks",async (req,res)=>{
    try {
        const all_tasks = await Tasks.find();
        if(!all_tasks){
            res.send("No tasks found");    
        }
        res.send(all_tasks);

    } catch (error) {
     
        res.send(error);   
    }
});

router.get("/tasks/:id",async (req,res)=>{

    const id = req.params.id;
    try {
        const task = await Tasks.findById(id);
        if(!task){
            return res.status(401).send();
        }
        res.send(task);
    } catch (error) {
     
        res.send(error);   
    }

});

router.patch("/tasks/:id",async (req,res)=>{

    const updateList = Object.keys(req.body);
    const allowedUpdates = ["description","completed"];

    const completedUpdate = updateList.every(update=>allowedUpdates.includes(update));

    if(!completedUpdate){
        return res.send("Invalid key");
    }

    try {
        const task = await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true,validationUpdate:true});
        if(!task){
            return res.status(401).send("task not found");
        }
        res.send(task);
    } catch (error) {
        res.send(error);   
    }

});

router.delete("/tasks/:id", async(req,res)=>{
    
    try {
        const tasks = await Tasks.findByIdAndDelete(req.params.id);
        if(!tasks){
            return res.status(404).send("No such task");
        }
        res.send(tasks);    
    } catch (error) {
        res.send(error);
    }
});


module.exports =  router;