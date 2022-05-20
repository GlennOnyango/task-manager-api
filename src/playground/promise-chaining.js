require('../db/mangoose');
const Users = require('../model/user');

// Users.findByIdAndUpdate("627b84f71d01450cdd3f6312",{age:32}).then((user)=>{
//     console.log(user);
//     return Users.countDocuments({age:25});
// }).then(results=>{
//     console.log(results);
// }).catch(error=>{
//     console.log(error);
// });

const updatUser = async (id,age)=>{
    const user = await Users.findByIdAndUpdate(id,age);
    const count = await Users.countDocuments(age);
    return count;
}

updatUser("627b84f71d01450cdd3f6312",{age:26}).then(count=>{
    console.log(count);
}).catch(e=>{
    console.log(e);
});