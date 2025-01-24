const express=require('express');
const cors=require('cors');
const {default: mongoose} =require('mongoose');
const Contact=require('./models/Contacts');

require('dotenv').config()
const app=express();

app.get('/test',(req,res)=>
{
    res.json("test")
})

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL);
app.post('/contact',async (req,res)=>
{
    const {name,email,message}=req.body;
    try{
        const contactDoc=await Contact.create({
            name,
            email,
            message,
        });
        res.json(contactDoc);
    }
    catch(e)
    {
        res.status(422).json(e);
    }
});

app.listen(4000);
