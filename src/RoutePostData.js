const postRouter = require('express').Router();
const app = require("express");
var cors = require('cors')
postRouter.use(cors());
const dotenv = require('dotenv');
dotenv.config();

const multer = require('multer');

const postModel = require('../src/ModelPostData');
const bodyparser = require('body-parser');
// const { response } = require('express');

postRouter.use(bodyparser.json());

var cloudinary = require('cloudinary').v2;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

cloudinary.config({
    cloudName : process.env.cloudName,
    apiKey : process.env.apiKey,
    apiSecret : process.env.apiSecret,
    secure:true
});

const storage = multer.diskStorage({
    
})

const uploadFile = multer({storage:storage})

postRouter.get("/PostView",async(req,res)=>
{
    try
    {
        let result = await postModel.find().sort({_id:-1});
        res.json(result);
    }
    catch(error)
    {
        res.status(400).json({
            message : error.message
        })
    }
})

postRouter.post('/NewPost',uploadFile.single("imageFile") , async(req,res)=>
{
    try
    {
        const imageUrl = await cloudinary.uploader.fileUpload(req.file.path);
        let postedDate = new Date();
        const dataObject = 
        {
            userName : req.body.author,
            location : req.body.address,
            description : req.body.description,
            postedDate : `${postedDate.getDate()} - ${postedDate.getMonth()} - ${postedDate.getFullYear}`,
            imageFile : imageUrl.url,
        }
        const postData = await postModel.create(dataObject);
        res.status(200).json({
            message : postData
        })
    }
    catch(error)
    {
        res.status(400).json({
            result : "Failure",
            message : error.message
        })
    }
})

module.exports = postRouter;

