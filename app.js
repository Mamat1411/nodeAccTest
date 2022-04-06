const express = require('express');
const app = express();
const port = 3000;

app.post('/', (req, res) => {
    res.send("Hello World");
});

app.use('/', (req, res) => {
    res.status(404);
    res.send(`404`);
});

app.listen(port, () =>{
    console.log(`This App is listening to port ${port}`);
});