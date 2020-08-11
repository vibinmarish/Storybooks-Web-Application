const express = require('express')
const router = express.Router()
const passport = require('passport')


//@desc Auth with Google
//@route GET /auth/google 

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//@desc Google auth callback
//@route GET /suth/google/callback

router.get('/google/callback', passport.authenticate('google', { failureRequired: '/' }),
    (req, res) => {
        res.redirect('/dashboard')
    })

//@ Desc logout
// route /auth/logout
router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})

module.exports = router;