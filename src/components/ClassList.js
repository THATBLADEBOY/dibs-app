import React, { Component } from 'react';
import { Button } from 'reactstrap';
import UserClassManager from '../module/UserClassManager'
import ModalExample from './Modal'

export class ClassList extends Component {
// Creating a reference to the id of the specified class card
classRef = React.createRef();   

// Building a new userClass object using the value of the id in the reference and the userId in session storage.
createUserClass = (evt) => {
    evt.preventDefault();
      const currentUser = sessionStorage.getItem("userId");
      const currentUserId = Number(currentUser);  
      const newUserClass = {
          classId: Number(this.classRef.current.id),
          userId: currentUserId

         

      }
   
      

      console.log(newUserClass);
      console.log(this.classRef);
      
    }



  render() {
    return (
      <div>
        <h2>Available Classes</h2>
        <div className="class-list">
        {this.props.classes.map(classes => 
            <div className="class-container" ref={this.classRef} key={classes.id} id={classes.id}>
                <h3>{classes.className}</h3>
                <p>{classes.description}</p>
                <p>{classes.date} {classes.time}</p>
                <p>Trainer: {classes.trainerId}</p>
                <Button onClick={this.createUserClass} color="primary">dibs</Button>
                <Button onClick={() => {this.props.history.push(`/${classes.id}/edit`)}} color="link">Edit</Button>
            </div> 
        )}
        </div>
      </div>
    )
  }
}

export default ClassList