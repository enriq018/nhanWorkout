DROP DATABASE IF EXISTS nhan;

CREATE DATABASE nhan;

USE nhan;
 
CREATE TABLE workouts (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	reps INT NOT NULL,
	weight INT, 
	date DATE,
	lbs BOOLEAN,
	PRIMARY KEY (ID)
);

{
	"name": "pull ups",
	"reps": 10,
	"weight": 0, 
	"lbs":true,
}