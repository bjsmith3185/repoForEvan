const router = require("express").Router();
const genEmail = require('../emailer/generate-email');

// Email post route
router.post('/send', (req, res) => {
    genEmail.sendMessage(req.body)
       .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  module.exports = router;