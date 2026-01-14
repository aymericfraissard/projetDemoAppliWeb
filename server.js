const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('bienvenue sur la page de login');
});

app.post('/register', (req, res) => {
    res.send('merci de vous créer un compte !');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});