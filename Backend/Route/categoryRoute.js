const express = require("express");
const User = require("../Model/user.model");
const router = express.Router();
const Category = require('../Model/Category.model')



router.post("/addcategory", async(req,res) =>{
    const category = new Category(req.body)
    try{
        await category.save()
        res.status(201).json({
            status: "Success",
            data: {
                category
            }
        })
    }
    catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})


module.exports = router;