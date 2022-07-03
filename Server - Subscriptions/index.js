const express = require('express');
const memberSchema = require('./models/membersSchema');
const membersController = require('./controller/membersController');
const showsController = require('./controller/showsController');
const subscriptionsController = require('./controller/subscriptionsController');
const app = express();

require('./configs/subscriptionsDB')

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(cors());

//  member/login

app.post('/member/login', (req, res) => {
    const {username, password} = req.body;
    memberSchema.findOne({username: username}, (err, member) => {
        if(member) {
            if (password === member.password) {
                res.send({ massage: "Login Successful", member: member })
            } else {
                res.send({ massage: "Password didn't match" })
            }
        } else {
            res.send({ massage: "Member not registered" })
        }
    })
})

//Register new USER ----> THEN Members
// app.post('/register', (req, res) => {
//     const { username, email, password } = req.body;
//     usersSchema.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ massage: "User already registered" })
//         } else {
//             const user = new usersSchema({ 
//                 username: username, 
//                 email: email, 
//                 password: password 
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send({ message: err})
//                 } else {
//                     res.send({ message: "Successfully Registered, Please login"})
//                 }
//             })
//         }
//     })
// })

app.use('/members', membersController);
app.use('/shows', showsController);
app.use('/subscriptions', subscriptionsController);

app.listen(9999, () => {
    console.log('The server is listening on PORT 9999 - subscriptions');
});