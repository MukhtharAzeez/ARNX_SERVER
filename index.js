const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const ProductModel = require('./product.schema')
const database = require('./config')

database();


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

app.use(cors({
    origin: ['https://main.d64uxgty9zsuu.amplifyapp.com'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
    credentials: true,
}));

app.get('/get-all-products',async(req,res)=>{
    try {
        const products =await ProductModel.find({})
        res.status(200).send(products)
    } catch (error) {
        console.log(error);
    }
})

app.post('/add-a-product',(req,res)=>{
    try {
        const newProduct =new ProductModel(req.body)
        newProduct.save()
        res.send(200).send({success: true})
    } catch (error) {
        console.log(error)
    }
})

app.listen(4500)