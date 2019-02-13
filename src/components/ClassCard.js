import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalExample from './Modal'
import UsersInClassModal from './UsersInClassModal'
import Moment from 'react-moment';

export class ClassCard extends Component {
  render() {
    let isTrainer = sessionStorage.getItem("trainerStatus");
    let classes = this.props.class
    return (
        <div className="class-container" ref={this.classRef} key={classes.id} id={classes.id}>
        <div className="head-class-container">
        <h3>{classes.className}</h3>
        {isTrainer === "true" &&
        <Button className="edit-button" onClick={() => {this.props.history.push(`/${classes.id}/edit`)}} color="link">Edit</Button>
        }
        </div>
        <Moment format="LLLL">{classes.date}</Moment>
        <p>with {classes.trainerId}</p>
        <p>{classes.spotsTaken} of {classes.spots} seats filled.</p>
        <div className="buttons-container">
        <UsersInClassModal theClass={classes} getUsersInClass={this.props.getUsersInClass}/>
        <Button className="dibs-button" onClick={() => {
            this.props.dibsFunction(classes.id, classes)
        }} color="primary">dibs</Button>
        <ModalExample classInfo={classes.description} classTitle={classes.className}
        classTrainer={classes.trainerId}
        duration={classes.duration}/>
        </div>
    </div> 
    )
  }
}

export default ClassCard
