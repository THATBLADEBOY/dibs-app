import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login"
import UsersManager from "./module/UsersManager"
import Dashboard from './components/Dashboard';
import ClassManager from './module/ClassManager'
import UserClassManager from './module/UserClassManager'
import ClassForm from './components/ClassForm'
import ClassEditForm from './components/ClassEditForm'

export class ApplicationViews extends Component {

    state = {
        users: [],
        classes: [],
        userClasses: []
      }

componentDidMount() {

UsersManager.getAll().then(allUsers => {
    this.setState({ users: allUsers });
    })

ClassManager.getAll().then(allClasses => {
    this.setState({ classes: allClasses });
})



// UserClassManager.getAll().then(allUserClasses => {
//     this.setState({ userClasses: allUserClasses })
// })

const currentUser = sessionStorage.getItem("userId");
const currentUserId = Number(currentUser);

UserClassManager.getUserSpecificClasses(currentUserId).then(allClasses => {
    this.setState({ userClasses: allClasses })
})




    
}

addClass = (theClass) => ClassManager.post(theClass)
.then(() => ClassManager.getAll())
.then(theClass => this.setState({
  classes: theClass
})
)

updateClass = (classesId, editedClassObj) => {
    return ClassManager.put(classesId, editedClassObj)
      .then(() => ClassManager.getAll())
      .then(classes => {
        this.setState({
          classes: classes
        })
      });
  }

  deleteClass = (id) => {
    return ClassManager.removeAndList(id)
      .then(classes => this.setState({
        classes
      })
      )
  }

  addUserClass = (userClasses) => UserClassManager.post(userClasses)
  .then(() => UserClassManager.getUserSpecificClasses(this.currentUserId))
  .then(userClasses => this.setState({
    userClasses: userClasses
  })
  )

  deleteUserClass = (id) => {
    UserClassManager.removeAndList(id)
      .then(classes => this.setState({
        userClasses: classes
      }, () => null)
      )
  } 


updateComponent = () => {
}


  render() {

    console.log(this.state.userClasses);
    return (
      <div>
        <Route path="/login" render={(props) => {
          return <Login {...props} users={this.state.users} updateComponent={this.updateComponent} />
        }} />
        <Route exact path="/" render={(props) => {
          return <Dashboard {...props} userClasses={this.state.userClasses} classes={this.state.classes} updateComponent={this.updateComponent} addUserClass={this.addUserClass} deleteUserClass={this.deleteUserClass}/>
        }} />
        <Route path="/newclass" render={(props) => {
          return <ClassForm {...props} addClass={this.addClass}/>
        }} />
        <Route path="/:classesId(\d+)/edit" render={(props) => {
          return <ClassEditForm {...props} updateClass={this.updateClass} deleteClass={this.deleteClass}/>
        }} />
      </div>
    )
  }
}

export default ApplicationViews
