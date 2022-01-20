const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

app.use(helmet());
app.use(cors());

app.use(express.json());

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.xfsxo.mongodb.net:27017,cluster0-shard-00-01.xfsxo.mongodb.net:27017,cluster0-shard-00-02.xfsxo.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-rmwk6w-shard-0&authSource=admin&retryWrites=true&w=majority`,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(()=> console.log('successfuly connected to Mongodb'))
    .catch(err => console.log('fail to connect to mongodb'))

module.exports = app;