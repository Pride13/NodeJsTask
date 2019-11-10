//calling libraries from package.json
const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path'); //library for working with paths

//creating an application
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

//creating TeamPlateEngine
app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

//setting options
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { user, renderPage } = require('./controllers');
const { provider } = require('./dataBase');
const { users } = require('./middleware');

//renderPage
app.get('/registrations', renderPage.registrations);
app.get('/logination', renderPage.logination);
app.get('/updateUser', renderPage.updateUser);

//users
app.post('/users', users.checkUserValidation, user.registerUser);
app.post('/auth', users.isUserAuthPresent, user.authUser);
app.post('/updateUsers', users.checkUpdateUserValidation, users.isUserUpdatePresent, user.updateUsers);

app.all('*', renderPage.notFound);

// app.all('*', async (req,res) => {
//
//     let [[query]] = await provider.promise().query('SELECT * FROM user');
//
//     console.log(query);
//
//     res.status(505).json('not found')
// });

//creating and running a server
app.listen(3000, ()=> {
    console.log(3000);
});

//that run the service should type "node app.js"
