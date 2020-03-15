const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/eshop',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true})
.then(()=>{console.log('Connected to mongodb...')})
.catch((err)=>{console.log('Could not connect to mongodb...')})

//DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover 
//and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
