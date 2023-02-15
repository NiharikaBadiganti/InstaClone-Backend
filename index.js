const app = require('./src/App');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.DATABASE_URI,{ useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log("Connected Successfully"))    
    .catch((error)=>console.log(error))

const port = process.env.PORT || 3000;
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})

