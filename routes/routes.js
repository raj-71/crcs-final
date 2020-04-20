const express = require('express');
const userRoutes = express.Router();
var userId = {};
userRoutes.get('/dashboard',(req,res)=>{
    if(req.session && req.session.uid){
        var object = {uid:userId.userid, email: 'sharma@123.com'};
        res.render('dashboard',object);
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname,'\\..');
        const fullPath = path.join(p1,'\\..\\public\\login.html');
        res.sendFile(fullPath);
    }
});

userRoutes.post('/login',(request,response)=>{
    userId = request.body;
    console.log('Request get is ',request.body);
    var userObject = request.body;
    if(userObject.userid==userObject.pwd){
        request.session.uid = userObject.userid;
        response.redirect('/dashboard');
    }
    else{
        response.send('Invalid Userid or Password');
    }
});

userRoutes.get('/logout',(req,res)=>{
    if(req.session && req.session.uid){
        req.session.destroy((err)=>{
            if(err){
                console.log('Error During Session Destroy', err);
            }
            else{
                console.log('Session Destroyed Successfully');
            }
        });
        res.render('logout');
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname+'\\..');
        const fullPath = path.join(p1,'\\public\\login.html');
        res.sendFile(fullPath);
    }
});

module.exports = userRoutes;