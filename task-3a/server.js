const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

let poruke = [];



app.get('/poruke', (req, res) => {
    res.json(poruke);
});

app.post('/poruke', (req, res) => {
    const poruka = {
        id: Date.now(), 
        tekst: req.body.tekst
    };
    poruke.push(poruka);
    res.json(poruka);
});

app.put('/poruke/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = poruke.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).send('Poruka nije pronadjena.');
    }
    poruke[index].tekst = req.body.tekst;
    res.json(poruke[index]);
});

app.delete('/poruke/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = poruke.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).send('Poruka nije pronadjena.');
    }
    poruke.splice(index, 1);
    res.send('Poruka je uspjesno obrisana.');
});

app.listen(PORT, () => {
    console.log(`server is running :  http://localhost:${PORT}`);
});