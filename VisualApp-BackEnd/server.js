const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors'); 
const dataRoutes = require('./routes/dataRoutes');

const app = express();

app.use(morgan('dev')); 


app.use(cors());

// =
// app.use(cors({
//   origin: 'http://localhost:3000', 
//   methods: ['GET', 'POST'], 
//   allowedHeaders: ['Content-Type', 'Authorization'], 
// }));

app.get('/', (req, res) => {
    res.send('Hello, worldi');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/Assigment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

app.use('/api', dataRoutes);
