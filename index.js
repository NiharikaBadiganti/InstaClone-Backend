const app = require('./src/App');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const db = 'mongodb+srv://Niharika:password@cluster0.gfgtat0.mongodb.net/?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})

