const router = require('express').Router();
const Category = require('../models/Category')

//Cretae Category
router.post('/',async (req, res)=>{
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat)
    } catch (error) {
        res.status(500).send(error);
    }
})


//Get Category
router.get('/',async (req, res)=>{
    try {
        const cat = await Category.find();
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;