const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main()
 .then(()=>{
    console.log("connection successful");
 })
 .catch((err)=>console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsappo');
  }
  let  allChats=[{
    from:"Anisha",
    to:"Krrish",
    msg:"Will you go out today",
    created_At:new Date(),
},{
    from:"Riya",
    to:"Priya",
    msg:"Message is comming",
    created_At:new Date(),
},{
    from:"Gopu",
    to:"Rita",
    msg:"We went to park",
    created_At:new Date(),
}];
Chat.insertMany(allChats);