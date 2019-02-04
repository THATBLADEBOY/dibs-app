import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login"
import UsersManager from "./module/UsersManager"
import Dashboard from './components/Dashboard';
import ClassManager from './module/ClassManager'

export class ApplicationViews extends Component {

    state = {
        users: [],
        classes: [],
        usersClasses: []
      }

componentDidMount() {

UsersManager.getAll().then(allUsers => {
    this.setState({ users: allUsers });
    })

ClassManager.getAll().then(allClasses => {
    this.setState({ classes: allClasses });
})
    
}


updateComponent = () => {
}


  render() {
    return (
      <div>
        <Route path="/login" render={(props) => {
          return <Login {...props} users={this.state.users} updateComponent={this.updateComponent} />
        }} />
        <Route exact path="/" render={(props) => {
          return <Dashboard {...props} classes={this.state.classes} updateComponent={this.updateComponent} />
        }} />
      </div>
    )
  }
}

export default ApplicationViews
