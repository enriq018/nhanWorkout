import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//now i need to tell my program to use that file and ask for it 
import RowElement from './components/RowElement.jsx';
import AddWorkoutForm from './components/AddWorkoutForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      workouts:[],
      addState: false

      }
      this.addToWorkouts = this.addToWorkouts.bind(this);
      this.deleteWorkout = this.deleteWorkout.bind(this);

    }

  componentWillMount() {
    this.getAllWorkouts();
  }

  getAllWorkouts(){
    $.ajax({
      url: '/workouts',
      method: 'GET',
      contentType: 'application/json',
      success: data => {
        console.log('success: get all', data)
        this.setState({workouts:data})
      },
      error: data => {
        console.log('error:get all', data)
      }
    })
  }

  addToWorkouts(name, reps, weight, lbs){

    //this.state.workoutText, this.state.repsText, this.state.lbs
    const data = {name:name, reps:parseInt(reps), weight: weight, lbs: lbs};

     $.ajax({
      url: '/workouts',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: data => {
        console.log('success: add to db', data)
        this.getAllWorkouts();
      },
      error: data => {
        console.log('error:get all', data)
      }
    })
  }

  deleteWorkout(id) {
    $.ajax({
      url: `/workouts/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: data => {
        console.log('success: add to db', data)
        this.getAllWorkouts();
      },
      error: data => {
        console.log('error: delete', data)
      }
    })
  }

  showForm(){
    this.setState({addState:true})
  }



  render () {
    return (
      <div className="container">
        <h1> NHAN SWOLE CHART</h1>
       <table className="table">
          <thead className="thead-dark">
            <tr> 
              <th>Workout</th>
              <th>Reps</th>
              <th>Weight/lbs</th>
            </tr>
          </thead>
          <tbody>
          {this.state.workouts.map((el, key) => <RowElement obj={el} key={key} delete={this.deleteWorkout}/>)}
          </tbody>
        </table>
        <button onClick={()=> this.showForm()} type="button" className="btn btn-primary btn-lg btn-block">Add</button>
        {this.state.addState ? <AddWorkoutForm add={this.addToWorkouts}/> : <div></div>}
      </div>
   )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));


