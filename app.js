const express = require('express');
const app = express();
const port = 3000;

app.post('/', (req, res) => {
    res.json({
        OUT_STAT : "T",
        OUT_MESS : "SUCCESS",
        OUT_DATA : []
    });
});

app.use('/', (req, res) => {
    res.status(404);
    res.json({
        OUT_STAT : "F",
        OUT_MESS : "FAILED"
    });
});

app.listen(port, () =>{
    console.log(`This App is listening to port ${port}`);
});