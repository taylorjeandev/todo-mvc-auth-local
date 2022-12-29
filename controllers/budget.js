const Budget = require("../models/Budget");

module.exports = {
  updateBudget: async (req, res) => {
    try {
      await Budget.updateOne(
        { userId: req.user.id },
        { totalBudget: req.body.totalBudget }
      );
      console.log("Budget has been updated!");
      res.redirect("/items");
    } catch (err) {
      console.log(err);
    }
  },
};
