import React, { Component } from 'react'
import ClassList from './ClassList'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <ClassList classes={this.props.classes} />
      </div>
    )
  }
}

export default Dashboard
