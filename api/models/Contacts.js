const mongoose=require('mongoose');
const {Schema}=mongoose;

const ContactSchema=new Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        message:String,
    }
);

const ContactModel=mongoose.model('Contacts',ContactSchema);

module.exports=ContactModel;