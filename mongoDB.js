const { MongoClient, ObjectId } = require('mongodb');

connectionURL = "mongodb://127.0.0.1:27017";
dbName = "task-manager";

MongoClient.connect(connectionURL,(error,client)=>{
    if(error){
        return console.log("An error Occured");
    }
    const db = client.db(dbName);
    // db.collection("users").insertOne({
    //     'Name':'Glenn',
    //     'id':'33137495'
    // });

    // db.collection("tasks").insertMany([{'_id':ObjectId(),'description':'Cook','completed':false},
    // {'_id':ObjectId,'description':'Rest','completed':false}],(error,result)=>{
    //     if(error){
    //         return console.log("An error occured during insert");
    //     }

    //     console.log(result);

    // });

    // db.collection('tasks').findOne({"_id" : ObjectId("6278a6981640f3083e98942a")},(error,result)=>{
    //     if(error){
    //         return console.log("Error during fetch");
    //     }
    //     console.log(result);

    // });
    // db.collection("tasks").find({"completed" : false}).toArray((error,result)=>{
    //     if(error){
    //         return console.log("Error during fetch");
    //     }
    //     console.log(result);

    // });

    // const fileter = {completed:false};
    // const updatedDocs = {$set: { completed:true }};
    // const results = db.collection('tasks').updateMany(fileter,updatedDocs);
    
    // results.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    const filter = {description:'Cook'}

    const deleted_record = db.collection('tasks').deleteMany(filter);

    deleted_record.then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });

});