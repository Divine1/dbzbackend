const {UserModel} = require("./../models/user.model")
// let usersSeed = [
//     { emailid: 'abc@gmail.com',username: 'abc',password: '122' }, 
//     { emailid: 'def@gmail.com',username: 'def',password: '344' },
//     { emailid: 'lion@gmail.com',username: 'lion',password: '456' },
//     { emailid: 'tiger@gmail.com',username: 'tiger',password: '543' },
//     { emailid: 'zebra@gmail.com',username: 'zebra',password: '452' },
//     { emailid: 'horse@gmail.com',username: 'horse',password: '674' },
//     { emailid: 'cat@gmail.com',username: 'cat',password: '586' },
//     { emailid: 'dog@gmail.com',username: 'dog',password: '582' },
//     { emailid: 'rat@gmail.com',username: 'rat',password: '268' },
//     { emailid: 'rabbit@gmail.com',username: 'rabbit',password: '236' },
// ];
let usersSeed = [
    { emailid: 'pea@gmail.com',username: 'pea',password: '122' }, 
    { emailid: 'hen@gmail.com',username: 'hen',password: '344' },
    { emailid: 'fish@gmail.com',username: 'fish',password: '456' },
    { emailid: 'bug@gmail.com',username: 'bug',password: '543' },
    { emailid: 'insect@gmail.com',username: 'insect',password: '452' },
    { emailid: 'eagle@gmail.com',username: 'eagle',password: '674' },
    { emailid: 'sparrow@gmail.com',username: 'sparrow',password: '586' },
    { emailid: 'cow@gmail.com',username: 'cow',password: '582' },
    { emailid: 'goat@gmail.com',username: 'goat',password: '268' },
    { emailid: 'hawk@gmail.com',username: 'hawk',password: '236' },
];
exports.createUser = ()=>{
    console.log("in createUser")
    UserModel.insertMany(usersSeed, function(error, docs) {
        if(error){
            console.log("error ",error)
        }
        else{
            console.log("docs ",docs)
        }
    });
}

exports.fetchUsers1 = ()=>{
    console.log("in fetchUsers")
    let userCursor = UserModel.find({}).cursor()
    userCursor.eachAsync(function(err,data){
        if(err){
            console.log("err ",err)
        }
        else{
            console.log("data ",data)
        }
    })
}

exports.fetchUsers = ()=>{
    console.log("in fetchUsers")
    let userBatch = UserModel.find({}).batchSize(4)
    userBatch.cursor().next((err,data)=>{
        if(err)
            console.log("err ",err)
        else
            console.log("data ",data)
    })
}