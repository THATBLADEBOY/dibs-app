import React, { Component } from 'react'
import ClassList from './ClassList'
import UserClassList from './UserClassList'
import { Button } from 'reactstrap'

export class Dashboard extends Component {

  render() {
    let isTrainer = sessionStorage.getItem("trainerStatus");
    return (
      <div>
        <br/>
        <p className="text-muted"><i>{this.props.quoteInfo.value}</i></p>
        {isTrainer === "true" &&
        <Button color="success" className="add-class-button"
        onClick={() => {this.props.history.push("/newclass")}}
        >Add Class</Button>}
        <UserClassList removeSpotFromClass={this.props.removeSpotFromClass} userClasses={this.props.userClasses} deleteUserClass={this.props.deleteUserClass} />
        <ClassList usersInClass={this.props.usersInClass} getUsersInClass={this.props.getUsersInClass} addSpotToClass={this.props.addSpotToClass} dibsFunction={this.props.dibsFunction} userClasses={this.props.userClasses} classes={this.props.classes} history={this.props.history} addUserClass={this.props.addUserClass} />
      </div>
    )
  }
}

export default Dashboard
