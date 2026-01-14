const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.send('bienvenue sur la page de login');
});

app.post('/register', (req, res) => {
    res.send('merci de vous créer un compte !');
});

app.listen(3000, () => {
    console.log('le server est accessible sur : http://localhost:3000');
});