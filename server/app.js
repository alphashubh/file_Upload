const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');

mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () =>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error', (err) =>{
    console.log('Database error '+err);
});

const app=express();

const qrusers=require('./controller/qrusers');
const inventory=require('./controller/inventory');

//Port number
 const port=3000;
//cors middleware
 app.use(cors());
//BodyParser middleware
app.use(bodyParser.json());
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//require('./config/passport')(passport);
app.use('/qrusers',qrusers);
app.use('/inventory',inventory);
//Index route
app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});
app.listen(port, () => {
    console.log('Server started on port '+port);

});