const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/unesi-ime', (req, res) => {
    let ime = req.body.ime;
    if (ime) {
        res.send(`Dobrodošli, ${ime}!`);
    } else {
        res.status(400).send('Molimo unesite ime.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
