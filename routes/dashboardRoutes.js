const express = require('express');
const dashboardRoutes = express.Router();
var userId = {};

dashboardRoutes.get('/paybill',(req,res)=>{
    if(req.session && req.session.uid){
        var payamount = {address:'Gurugram',amount:'123',deviceID: '531312'};
        res.render('paybill',payamount);
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname,'\\..');
        const fullPath = path.join(p1,'\\..\\public\\error.html');
        res.sendFile(fullPath);
    }
});

dashboardRoutes.get('/complain',(req,res)=>{
    if(req.session && req.session.uid){
        var complainInfo = {address:'Gurugram',deviceID: '531312'};
        res.render('complains',complainInfo);
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname,'\\..');
        const fullPath = path.join(p1,'\\..\\public\\error.html');
        res.sendFile(fullPath);
    }
});

dashboardRoutes.get('/query',(req,res)=>{
    if(req.session && req.session.uid){
        var queryInfo = {deviceID: '531312'};
        res.render('query',queryInfo);
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname,'\\..');
        const fullPath = path.join(p1,'\\..\\public\\error.html');
        res.sendFile(fullPath);
    }
});

dashboardRoutes.get('/applyconnection',(req,res)=>{
    if(req.session && req.session.uid){
        res.render('applyConnection');
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname,'\\..');
        const fullPath = path.join(p1,'\\..\\public\\error.html');
        res.sendFile(fullPath);
    }
});

module.exports = dashboardRoutes;