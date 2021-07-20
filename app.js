const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const helmet = require("helmet");

//errorHandler
const errorHandler = require('./middleware/errorHandler')

//DB 
const sequelize = require('./until/database')

//route
const listRoute = require('./routes/list');

const app = express();
// cors Enable on develop
app.use(cors())
//helmet
app.use(helmet())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/list',listRoute)

const sync = async () => {
    try{
        await sequelize.sync({force:false});
    }catch(err){
        console.log(err)
    }
}
sync()

app.use(errorHandler)

module.exports = app;
