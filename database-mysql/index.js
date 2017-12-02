//require mysql library to allow us to use javascript to work with database
const mysql = require('mysql');
//create a connection to the database and pass in the correct information to sign in (unique per person)
const connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'plantlife',
   database : 'nhan'
 });

const getAllWorkouts = (callback) => {
	var queryString = 'SELECT * FROM workouts';
	connection.query(queryString, (err, results, fields) => {
		if(err) {
			callback(err);
		} else {
			callback(results);
		}
	})
}

const addWorkout = (obj, callback) => {
	var queryString = `INSERT INTO workouts (name, reps, weight,lbs) VALUES('${obj.name}', ${obj.reps}, ${obj.weight}, ${obj.lbs})`;
	connection.query(queryString, (err, results, fields) => {
		if(err) {
			callback(err)
		} else {
			callback(results)
		}
	});
}

const removeWorkout = (id, callback) => {
  var queryString = `DELETE FROM workouts WHERE id = ${id}`;
  connection.query(queryString, (err, results, fields) => {
  	if(err) {
  		callback(err);
  	} else {
  		callback(results);
  	}
  })
}

const updateWorkout = (obj, callback) => {
  var queryString = `UPDATE workouts SET name = '${obj.name}', reps = ${obj.reps}, 
  weight = ${obj.weight}, lbs = ${obj.lbs} 
  WHERE id = ${obj.id}`;
  connection.query(queryString, (err, results, fields) => {
  	if(err) {
  		callback(err);
  	} else {
  		callback(results);
  	}
  });
}

// Export all the functions to be used else where (we use them in the server)
module.exports = {
	getAllWorkouts: getAllWorkouts,
	addWorkout: addWorkout,
	removeWorkout: removeWorkout,
	updateWorkout: updateWorkout
}