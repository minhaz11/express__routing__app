const express = require('express');
const  route = express.Router();
const accounts = require('./database');

route.get('/accounts',(req,res)=>{
    res.json({userdata:accounts});
});

route.post('/accounts',(req,res)=>{
    const incommingAcc = req.body;
    accounts.push(incommingAcc);
    res.json(accounts);
});

route.get('/accounts/:id',(req,res)=>{
    const accid = Number(req.params.id);
    const getAccount = accounts.find((acc) => acc.id === accid);
    if(!getAccount){
       res.status(500).send('Account not found'); 
    }else{
        res.json({userdata:[getAccount]});
    }
});

route.put('/accounts/:id',(req,res)=>{
    const accid = Number(req.params.id);
    const getAccount = accounts.find((acc) => acc.id === accid);
    const body = req.body;
    const index = accounts.indexOf(getAccount);
    if(!getAccount){
       res.status(500).send('Account not found'); 
    }else{
        const update = {...getAccount, ...body}
        accounts[index] = update;
        res.json({userdata:[update]});
    }
});

module.exports = route;