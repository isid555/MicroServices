const express = require('express');
const app = express();
const PORT = 3001;

app.get('/user', (req, res) => {
    res.send('Hello World1! , Im from user Service');
});

app.listen(PORT, () => {
    console.log(`User Service running at http://localhost:${PORT}/user`);
});
