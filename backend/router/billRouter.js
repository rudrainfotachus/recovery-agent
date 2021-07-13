import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Bill from '../models/billModel.js';
import data from './../test_data.js'
import {isAuth} from './../utils.js'
 
const billRouter = express.Router();

billRouter.get('/', expressAsyncHandler(async (req, res) =>{
    const bills = await Bill.find({})
    res.send(bills);
}));

// seed ,many records 
billRouter.get('/seed', expressAsyncHandler(async(req,res)=>{
    
    const createBills= await Bill.insertMany(data.bills)
    res.send({createBills});
}))

// billRouter.get('/all', isAuth, expressAsyncHandler(async (req, res)=>{
//     const bills = await Bill.find({})
//     res.send(bills);
// }))

billRouter.get('/all', expressAsyncHandler(async (req, res)=>{
    
    const bills = await Bill.find({})
    res.send(bills);
}))

billRouter.get('/bill/:id', expressAsyncHandler( async(req,res)=>{
    const bill = await Bill.findById(req.params.id)
    console.l
    if(bill){
        res.send(bill);
    }
    else{
        res.status(404).send({message: 'Bill not Found'})
    }
}))


export default billRouter;;