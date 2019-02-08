import React, { Component } from 'react';
import { Button } from 'reactstrap';
import UserClassManager from '../module/UserClassManager'
import ModalExample from './Modal'
import UsersInClassModal from './UsersInClassModal'

export class ClassList extends Component {




    


  render() {

    




    console.log("this one", this.props.userClasses)
      let isTrainer = sessionStorage.getItem("trainerStatus");
    return (
      <div>
        <h2>Available Classes</h2>
        <div className="class-list  available-classes">
        {this.props.classes.map(classes => 
            <div className="class-container" ref={this.classRef} key={classes.id} id={classes.id}>
                <div className="head-class-container">
                <h3>{classes.className}</h3>
                {isTrainer === "true" &&
                <Button className="edit-button" onClick={() => {this.props.history.push(`/${classes.id}/edit`)}} color="link">Edit</Button>
                }
                </div>
                <p>{classes.date} {classes.time}</p>
                <p>with {classes.trainerId}</p>
                <p>{classes.spotsTaken} of {classes.spots} seats filled.</p>
                <div className="buttons-container">
                <UsersInClassModal usersInClass={this.props.getUsersInClass}/>
                <Button className="dibs-button" onClick={() => {
                    this.props.dibsFunction(classes.id, classes)
                }} color="primary">dibs</Button>
                <ModalExample classInfo={classes.description} classTitle={classes.className}/>
                </div>
                
                
            </div> 
        )}
        </div>
      </div>
    )
  }
}

export default ClassList