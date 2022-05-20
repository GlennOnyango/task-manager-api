require('../db/mangoose');
const Tasks = require('../model/tasks');

// Tasks.findByIdAndRemove("627b883a5ae06fd9cb3d2d94").then((task)=>{
//     console.log(task);
//     return Tasks.countDocuments({complete:false});
// }).then(results=>{
//     console.log(results);
// }).catch(error=>{
//     console.log(error);
// });

const deleteTasks = async (id,typeOfTask)=>{
    await Tasks.findByIdAndDelete(id);
    return await Tasks.countDocuments(typeOfTask);
}

deleteTasks('627b85211d01450cdd3f6314',{complete:false}).then(count=>{
    console.log(count);
}).catch(e=>{
    console.log(e);
});
