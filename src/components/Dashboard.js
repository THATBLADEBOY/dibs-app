import React, { Component } from 'react'
import ClassList from './ClassList'
import UserClassList from './UserClassList'

export class Dashboard extends Component {

componentDidMount() {
    console.log("Dash", this.props.userClasses)
}

  render() {
    return (
      <div>
        <UserClassList userClasses={this.props.userClasses} />
        <ClassList classes={this.props.classes} />
      </div>
    )
  }
}

export default Dashboard
