const express = require('express');

const app = express();
const PORT = 3000;

app.get('/dobrodosli', (req, res) => {
    res.send('Dobrodošli na naš Express server!');
});

app.listen(PORT, () => {
    console.log(`Server is running :  http://localhost:${PORT}`);
});

