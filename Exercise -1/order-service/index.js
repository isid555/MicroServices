const express = require('express');
const app = express();
const PORT = 3002;

app.get('/order', (req, res) => {
    res.send('Hello World2! Im from Order Service');
});

app.listen(PORT, () => {
    console.log(`Order Service running at http://localhost:${PORT}/order`);
});
