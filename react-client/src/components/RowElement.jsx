import React from 'react';
// forgot to import react as well! you need it to create components 
// okay so im gonna make a smaller component now 

const RowElement = (props) => (
	<tr>
	  <th scope="row">{props.obj.name}</th>
	  <td>{props.obj.reps}</td>
	  <td>{props.obj.weight}/{props.obj.lbs? 'lbs' : 'kilos'}</td>
	  <button type="button" className ="btn btn-primary">Edit</button>
	  <button onClick={()=> props.delete(props.obj.id)} type="button" className ="btn btn-danger">Delete</button>

	</tr>
)

//i want this to work on other files so i need to export it! 
export default RowElement;
//thats it! 

