const mongoose=require("mongoose");
const chatSchema=new mongoose.Schema({
    from:{
        type:String,
       
    },
    to:{
        type:String,
        
    },
    msg:{
        type:String,
    
    },
    created_At:{
        type:Date,
      
    },
});
const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;