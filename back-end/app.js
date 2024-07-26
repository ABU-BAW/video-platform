const express = require(`express`);
const app = express();
const cors = require(`cors`);
const { dbConnection } = require("./db/dbconnect");
const {readdirSync} = require(`fs`)
const path = require('path');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/Client')

require(`dotenv`).config();

const PORT = process.env.PORT || 8000


//middlewares

app.use(cors({
    origin:['http://localhost:3000/login'],
    methods: ['GET','POST'],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

//routes

readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

app.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name,email,password: hash})
        .then(user => res.json('success'))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

app.post('login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, response) => {
                if(response){
                    const token = jwt.sign({email:user.email, role: user.role},
                        'jwt-secret-key', {expiresIn: '1d'}
                    )
                    res.cookie('token',token)
                    return res.json('sucess')
                }else{
                    return res.json("incorrect password")
                }
            })
        }else{
            return res.json("No record exists")
        }
    })
})

//serve static files
app.use('/public', express.static(path.join(__dirname, 'public')))

const server = () => {
    dbConnection()
    app.listen(PORT, () => {
        console.log(`server is listening to Port ${PORT}`);
    })
}

server()