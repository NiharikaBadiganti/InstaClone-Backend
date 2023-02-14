const app = require('./App');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected Successfully");
})

const port = 3000;

app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})

