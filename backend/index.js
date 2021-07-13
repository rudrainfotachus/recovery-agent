// Developer : Rudra Infotachus
// Date : 29/06/2021
// Desc : Main Server JS include App creation

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import billRouter from './router/billRouter.js'
import userRouter  from './router/userRouter.js'

import data from './test_data.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// data base connection
mongoose.connect('mongodb://localhost/recveryAgent',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
})

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/', (req,res)=>{
    res.send('Server Calls Ready ! by Rudra Infotachus')
})

app.use('/api/bills', billRouter);
app.use('/api/users',userRouter)
app.get('/api/allBills',(req,res)=>{
    res.send(data.bills)
})
app.use((err, req, res, next)=>{
  res.status(500).send({message: err.message});
})
app.listen(4000, ()=>{
    console.log('Server Listening @ http://localhost:6000 Port')
})