const express = require('express')

//An express router can hold routes
//We use router to organise routes
//Example:
//One router for user sign up, log in, recover password
//one router for managing products
// one router for managing orders
const router = express.Router();

router.get("/", function(req,res)
{
    // res.send("Home pagelandingagagag")
    res.render("landing/home")
})
router.get("/about-us", function(req,res)
{
    res.render("landing/about-us")

})
router.get("/contact-us", function(req,res)
{
    res.render("landing/contact-us")
})


module.exports = router;