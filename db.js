var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb+srv://qualik_2021:<#DR_serverTraining>@cluster0.cg5fb.mongodb.net/<cluster0>?retryWrites=true&w=majority');

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Successfully connected to MongoDB!");
});