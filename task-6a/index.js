const express = require('express');
const mongoose = require('mongoose');
const { logRequests } = require('./middleware/logMiddleware');
const inventoryRoutes = require('./routes/inventoryRoutes');
const requestRoutes = require('./routes/requestRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfuly connected on MongoDB'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(logRequests);

app.use('/api', inventoryRoutes);
app.use('/api', requestRoutes);
app.use('/api', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong ' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
