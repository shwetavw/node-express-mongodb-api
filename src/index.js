const express = require('express')
require('dotenv').config()
require('./db/mongoose')
const productRouter = require('./routes/product')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use('/api/products', productRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})