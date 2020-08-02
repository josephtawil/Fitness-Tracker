const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());

const clientRouter = require('./routes/client-routes');
app.use(clientRouter);

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);
});