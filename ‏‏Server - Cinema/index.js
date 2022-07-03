const express = require('express');
const usersController = require('./controller/usersController');
const usersSchema = require('./models/userSchema');
// const membersSchema = require('../Server - Subscriptions/models/membersSchema');
const app = express();

require('./configs/usersDB');

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    usersSchema.findOne({ username: username }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ massage: "Login Successful", user: user })
            } else {
                res.send({ massage: "Password didn't match" })
            }
        } else {
            res.send({ massage: "User not registered" })
        }
    })
})

app.use('/users', usersController);

const PORT = process.env.PORT || 9876;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} - Cinema`);
});