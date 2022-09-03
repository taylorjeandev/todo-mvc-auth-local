const Budget = require('../models/Budget')

module.exports = {
    createBudget: async (req, res)=>{
        try{
            await Budget.create({totalBudget: req.body.totalBudget, userId: req.user.id})
            console.log('Budget has been added!')
            res.redirect('/items')
        }catch(err){
            console.log(err)
        }
    },
}