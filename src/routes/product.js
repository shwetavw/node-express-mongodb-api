const express = require('express')
const Product = require('../models/product')
const router = new express.Router();

router.get('/home',(req,res)=>{
    res.send('Welcome to EShop');
})

router.get('/', async (req,res)=>{
    try{
        const products = await Product.find()
        if(!products){
            return res.status(404).send('No product found')
        }
        res.status(200).send(products)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/:id', async (req,res)=>{
    const _id = req.params.id
    try{
        const product = await Product.findById(_id)
        if(!product){
        return res.status(404).send('Product with given id was not found')
        }

        return res.status(200).send(product)
    }catch(e){
        res.status(400).send(e)
    }
    
})

router.post('/', async (req,res)=>{    
    const product = new Product(req.body)
    try{
        await product.save()
        res.status(201).send(product)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.patch('/:id', async (req,res)=>{   
    const _id = req.params.id 
    const updates = Object.keys(req.body)
    const allowUpdates = ['price','stock','rating','status','updatedat']
    const isValidated = updates.every((update) => {
        return allowUpdates.includes(update)
    })

    if(!isValidated){
        return res.status(400).send({error: 'Invalid updates'})
    }

    try{
        const product = await Product.findByIdAndUpdate(_id)
        if(!product){
            return res.status(400).send('Product with given id was not found')
        }

        updates.forEach((u)=>{
            product[u] = req.body[u]
        })

        await product.save()
        res.status(200).send(product)

    }catch(e){
        res.status(500).send(e)
    }    
})

router.delete('/:id',async (req,res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id)        
        if(!product){
        return res.status(404).send('Product with given id was not found');
        }

        res.status(200).send(product)
    }catch(e){
        res.status(500).send(e)
    }    
})


module.exports = router