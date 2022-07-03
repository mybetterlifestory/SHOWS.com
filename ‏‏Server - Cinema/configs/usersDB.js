var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/usersDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {console.log('Database is connected') }
).catch((err) => console.log('Can not connect to the database'+ err))
