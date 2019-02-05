import React, { Component } from 'react';
import { Button } from 'reactstrap';
import UserClassManager from '../module/UserClassManager'
import ModalExample from './Modal'

export class ClassList extends Component {


  render() {
    return (
      <div>
        <h2>Available Classes</h2>
        <div className="class-list  available-classes">
        {this.props.classes.map(classes => 
            <div className="class-container" ref={this.classRef} key={classes.id} id={classes.id}>
                <h3>{classes.className}</h3>
                <p>{classes.description}</p>
                <p>{classes.date} {classes.time}</p>
                <p>Trainer: {classes.trainerId}</p>
                <Button onClick={() => {
                    const currentUser = sessionStorage.getItem("userId");
                    const currentUserId = Number(currentUser);
                    const newUserClass = {
                        classId: classes.id,
                        userId: currentUserId
                    }
                    this.props.addUserClass(newUserClass);
                }} color="primary">dibs</Button>
                <Button onClick={() => {this.props.history.push(`/${classes.id}/edit`)}} color="link">Edit</Button>
            </div> 
        )}
        </div>
      </div>
    )
  }
}

export default ClassList