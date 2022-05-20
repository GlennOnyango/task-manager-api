const express = require('express');

//database
require("./db/mangoose");


//routes
const userRouter = require('./routes/userRoutes');

const taskRouter = require('./routes/tasksRoutes');

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log("Server running on port",port);
});