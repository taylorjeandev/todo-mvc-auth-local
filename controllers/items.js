const Item = require('../models/Item')
const Budget = require('../models/Budget')

module.exports = {
    getItems: async (req,res)=>{
        console.log(req.user)
        try{
            const items = await Item.find({userId:req.user.id})
            const budget = await Budget.findOne({userId:req.user.id})
            res.render('items.ejs', {items: items, budget: budget, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Item.create({item: req.body.item, itemPrice: req.body.itemPrice, userId: req.user.id})
            console.log('Item has been added!')
            res.redirect('/items')
        }catch(err){
            console.log(err)
        }
    },
    deleteItem: async (req, res)=>{
        console.log(req.body.itemIdFromJSFile)
        try{
            await Item.findOneAndDelete({_id:req.body.itemIdFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    