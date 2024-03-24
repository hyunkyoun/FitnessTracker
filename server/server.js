const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ekim2350:2VWvSDREzM04VAJ2@database-0.pfdwz0q.mongodb.net/?retryWrites=true&w=majority&appName=database-0")

http.listen(4000, function(){
    console.log('Server is running');
});