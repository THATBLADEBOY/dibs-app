import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login"
import UsersManager from "./module/UsersManager"
import Dashboard from './components/Dashboard';
import ClassManager from './module/ClassManager'
import UserClassManager from './module/UserClassManager'
import ClassForm from './components/ClassForm'
import ClassEditForm from './components/ClassEditForm'
import RegistrationForm from './components/RegistrationForm'
import TrainerRegistration from './components/TrainerRegistration'
import AlreadySignedUpModal from './components/AlreadySignedUpModal'

export class ApplicationViews extends Component {

    state = {
        users: [],
        classes: [],
        userClasses: [],
        currentUserId: "",
        spotsTaken: "",
        usersInClass: []
      }

componentDidMount() {

UsersManager.getAll().then(allUsers => {
    this.setState({ users: allUsers });
    })

ClassManager.getAll().then(allClasses => {
    this.setState({ classes: allClasses });
})

this.getUserClasses();

this.getTheUsersInClass();
}

getUserClasses = () => {
    const currentUser = sessionStorage.getItem("userId");
    const currentUserId = Number(currentUser);
    this.setState({currentUserId: currentUserId})
    console.log("userID", currentUserId);
    UserClassManager.getUserSpecificClasses(currentUserId).then(allClasses => {
    this.setState({ userClasses: allClasses })
})
}


addSpotToClass = (theClass) => {

  const existingClass = {
    className: theClass.className,
    date: theClass.date,
    time: theClass.time,
    description: theClass.description,
    trainerId: theClass.trainerId,
    spots: theClass.spots,
    spotsTaken: theClass.spotsTaken + 1
  }
  this.updateClass(theClass.id, existingClass)
}

removeSpotFromClass = (theClass) => {

  const existingClass = {
    className: theClass.className,
    date: theClass.date,
    time: theClass.time,
    description: theClass.description,
    trainerId: theClass.trainerId,
    spots: theClass.spots,
    spotsTaken: theClass.spotsTaken - 1
  }
  this.updateClass(theClass.id, existingClass)
}


dibsFunction = (classId, theClass) => {

let classesAlreadySignedUpFor = this.state.userClasses.map(eachClass => {
  return eachClass.class.id
})

 let alreadySignedUp = classesAlreadySignedUpFor.includes(classId);

 if(alreadySignedUp === true) {
   alert("You're already signed up!")
 } else if(theClass.spots === theClass.spotsTaken) {
  alert("Sorry, that class is full!")
 } else {
  
  const currentUser = sessionStorage.getItem("userId");
  const currentUserId = Number(currentUser);
  const newUserClass = {
      classId: classId,
      userId: currentUserId
  }
  this.addUserClass(newUserClass)
  this.addSpotToClass(theClass)

 }
  
}



addClass = (theClass) => ClassManager.post(theClass)
.then(() => ClassManager.getAll())
.then(theClass => this.setState({
  classes: theClass
})
)

addUser = (user) => UsersManager.post(user)
.then(() => UsersManager.getAll())
.then(users => this.setState({
  users
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

getTheUsersInClass = (id) => {
  return ClassManager.getUsersInClass(id)
  .then(users => {
  this.setState({ usersInClass: users })
  })
}

addUserClass = (userClasses) => {
UserClassManager.post(userClasses)
.then(() => UserClassManager.getUserSpecificClasses(this.state.currentUserId))
.then(userClasses => this.setState({
userClasses: userClasses
})
)
}

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
    return (
      <div>
        <Route path="/login" render={(props) => {
          return <Login {...props} getUserClasses={this.getUserClasses} users={this.state.users} updateComponent={this.updateComponent} />
        }} />
         <Route path="/user/register" render={(props) => {
          return <RegistrationForm {...props} addUser={this.addUser} />
        }} />
         <Route path="/trainer/register" render={(props) => {
          return <TrainerRegistration {...props} addUser={this.addUser} />
        }} />
        <Route exact path="/" render={(props) => {
          return <Dashboard {...props} getUsersInClass={this.getTheUsersInClass} removeSpotFromClass={this.removeSpotFromClass} addSpotToClass={this.addSpotToClass}dibsFunction={this.dibsFunction} userClasses={this.state.userClasses} classes={this.state.classes} updateComponent={this.updateComponent} addUserClass={this.addUserClass} deleteUserClass={this.deleteUserClass}/>
        }} />
        <Route path="/newclass" render={(props) => {
          return <ClassForm {...props} addClass={this.addClass}/>
        }} />
        <Route path="/:classesId(\d+)/edit" render={(props) => {
          return <ClassEditForm {...props} updateClass={this.updateClass} deleteClass={this.deleteClass} getUserClasses={this.getUserClasses}/>
        }} />
      </div>
    )
  }
}

export default ApplicationViews
