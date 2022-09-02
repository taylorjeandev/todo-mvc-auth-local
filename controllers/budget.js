const Budget = require('../models/Budget')

module.exports = {
    createBudget: async (req, res)=>{
        try{
            await Budget.create({totalBudget: req.body.BudgetItem, userId: req.user.id})
            console.log('Budget has been added!')
            res.redirect('/items')
        }catch(err){
            console.log(err)
        }
    },
}