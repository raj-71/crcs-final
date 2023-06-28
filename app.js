const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const app = express();
const session = require('express-session');
app.use(express.static('public'));

//Session Config
app.use(session({
    secret: 'cablerentcollectionsystem',
    resave: false,
    saveUninitialized: false,
    expires: 30*60*1000,
    cookie:{
        secure: false,
        maxAge: 24*60*60*1000
    }
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs');

app.use('/',userRoutes);
app.use('/dashboard',dashboardRoutes);

app.use(require('./middlewares/error'));

const debug = require('debug')('app');
const server = app.listen(process.env.PORT || 3000,()=>{
    console.log('server start...',server.address().port);
    debug('Server Start',server.address().port,'PID',process.pid);
})