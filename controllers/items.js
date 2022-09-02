const Item = require('../models/Item')

module.exports = {
    getItems: async (req,res)=>{
        console.log(req.user)
        try{
            const items = await Item.find({userId:req.user.id})
            res.render('items.ejs', {items: items, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Item.create({item: req.body.Item, completed: false, userId: req.user.id})
            console.log('Item has been added!')
            res.redirect('/item')
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