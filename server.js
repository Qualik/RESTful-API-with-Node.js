// Tells the app where to listen

var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
    console.log('Express server listening on port ' + port);
});

//The app is required and put in a variable
//The a port is selected for the app to run
//Then start up the server with app to listen