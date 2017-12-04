//express is the server
// require allows us to use node modules that we npm/bower/yarn/ect installed
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');

//MIDDLEWARE 
// middleware allows extra properties to be added to an incoming request object
app.use(express.static(__dirname + '/../react-client/dist'));
// bodyParser adds a "body" property to the request in JSON format
app.use(bodyParser.json())

//Gets all workouts stored in workouts table
app.get('/workouts', (req,res) => {
	db.getAllWorkouts(data => {
		res.status(200);
		res.send(data)
	})
})

//Adds a workout to workouts table
app.post('/workouts', (req, res) => {
	console.log(req.body)
  db.addWorkout(req.body, (data) => {
  	res.status(201);  	
  	res.send(data);
  });
})

//Deletes a table in workouts based on provided row id 
app.delete('/workouts/:id', (req, res) => {
	db.removeWorkout(req.params.id, (data) => {
		res.status(200);
		res.send(data)
	});
})

//Updates a table in workouts based on provided row id
app.patch('/workouts', (req, res) => {
	db.updateWorkout(req.body, data => {
		res.status(200);
		res.send(data)
	});
})

//invoke the server turning it on and having it listen for incoming requests
app.listen(3000, () => console.log('server is running 3000'))
