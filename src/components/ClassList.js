import React, { Component } from 'react';
// import { Button } from 'reactstrap';

export class ClassList extends Component {
  render() {
    return (
      <div>
        <h2>Available Classes</h2>
        <div className="class-list">
        {this.props.classes.map(classes => 
            <div className="class-container" key={classes.id}>
                <h3>{classes.className}</h3>
                <p>{classes.description}</p>
                <p>{classes.date} {classes.time}</p>
                <p>Trainer: {classes.trainerId}</p>
                <button >dibs</button> <button >More Info</button>
                <button >Edit</button>
            </div> 
        )}
        </div>
      </div>
    )
  }
}

export default ClassList