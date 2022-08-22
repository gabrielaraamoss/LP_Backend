const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const fruitsRoutes = require('./api/routes/products')
const contactRoutes = require('./api/routes/contact')
const blogRoutes = require('./api/routes/blog')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Acces-Control-Allor-Headers','Origin, X-Requested-With, Content-TYpe, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/fruits',fruitsRoutes);
app.use('/contactus',contactRoutes);
app.use('/blog',blogRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;