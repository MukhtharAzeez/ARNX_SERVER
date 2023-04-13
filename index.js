const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const ProductModel = require('./product.schema')

mongoose.connect('mongodb://localhost:27017/arnx',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
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

app.listen(4000)