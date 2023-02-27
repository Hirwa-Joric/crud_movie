const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const app = express();


app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use('/',require('./routes/index'))// when ever we make a request on / we will execute the middlwere'we are mounting the middleware on the /'
app.use('/users',require('./routes/user'))// when ever we make a request on / we will execute the middlwere'we are mounting the middleware on the /'
const PORT = process.env.PORT || 500;

app.listen(PORT, console.log(`server is listening on port http://localhost:${PORT}/`));