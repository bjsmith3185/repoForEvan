const router = require("express").Router();

//Health check

// Route used to confirm service is running

// When a get request is made from '/healthcheck', please run ___

router.route("/healthcheck")
    .get((req, res) => {
        console.log("...in the healthcheck route");
        res.send("Email service is running");
    });


module.exports = router;