import React, { Component } from 'react'
import ClassList from './ClassList'
import UserClassList from './UserClassList'
import { Button } from 'reactstrap'

export class Dashboard extends Component {

  render() {
    return (
      <div>
        <Button color="success" className="add-class-button"
        onClick={() => {this.props.history.push("/newclass")}}
        >Add Class</Button>
        <UserClassList userClasses={this.props.userClasses} deleteUserClass={this.props.deleteUserClass} />
        <ClassList classes={this.props.classes} history={this.props.history} addUserClass={this.props.addUserClass} />
      </div>
    )
  }
}

export default Dashboard
