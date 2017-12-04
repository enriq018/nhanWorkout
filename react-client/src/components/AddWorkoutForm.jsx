import React from 'react';

class AddWorkoutForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			workoutText:'',
			repsText: '',
			weightText:'',
			lbs: false
		}
	}

	render() {
		return (
		<div className="form-inline">
		  <label className="sr-only" for="inlineFormInput">Name</label>
		  <input onChange={(e)=> this.setState({workoutText:e.target.value})} type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Workout Name"/>

		  <label className="sr-only" for="inlineFormInputGroup">Username</label>
		  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
		    <div className="input-group-addon">#</div>
		    <input onChange={(e)=> this.setState({repsText:e.target.value})} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Reps"/>
		  </div>

		  <label className="sr-only" for="inlineFormInputGroup">Weight</label>
		  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
		    <div className="input-group-addon">#</div>
		    <input onChange={(e)=> this.setState({weightText:e.target.value})} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Weight"/>
		  </div>

		  <div className="form-check mb-2 mr-sm-2 mb-sm-0">
		    <label className="form-check-label">
		      <input onClick={()=> this.setState({lbs:!this.state.lbs})} className="form-check-input" type="checkbox"/> Lbs
		    </label>
		  </div>
	  <button   onClick={()=> this.props.add(this.state.workoutText, this.state.repsText, this.state.weightText, this.state.lbs)} type="submit" className="btn btn-primary">Submit</button>
		</div>)
		}

}


export default AddWorkoutForm;