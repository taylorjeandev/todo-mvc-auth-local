const Item = require("../models/Item");
const Budget = require("../models/Budget");

module.exports = {
  getItems: async (req, res) => {
    console.log(req.user);
    try {
      const items = await Item.find({ userId: req.user.id });
      const budget = await Budget.findOne({ userId: req.user.id });

      let itemPrices = [];
      for (let i = 0; i < items.length; i++) {
        itemPrices.push(items[i].itemPrice);
      }
      let sum = itemPrices.reduce((acc, c) => acc + c, 0);
      let remainder = budget.totalBudget - sum;

      res.render("items.ejs", {
        remainder: remainder,
        items: items,
        budget: budget,
        sum: sum,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createItem: async (req, res) => {
    try {
      await Item.create({
        item: req.body.item,
        itemPrice: req.body.itemPrice,
        userId: req.user.id,
      });
      console.log("Item has been added!");
      res.redirect("/items");
    } catch (err) {
      console.log(err);
    }
  },
  deleteItem: async (req, res) => {
    console.log(req.body.itemIdFromJSFile);
    try {
      await Item.findOneAndDelete({ _id: req.body.itemIdFromJSFile });
      console.log("Deleted Item");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
