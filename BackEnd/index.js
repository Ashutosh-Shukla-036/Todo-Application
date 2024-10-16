const express = require('express');
const connectDB = require('./db');
const auth = require('./routes/userRoute')
const task = require('./routes/taskRoute')
const app = express()

app.use(express.json());
connectDB();

app.get('/',(req,res) => {
    res.status(200).send("Welcome...");
}); 

app.use('/',auth);
app.use('/',task);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});