import React, { Component } from 'react'
import UserClassManager from '../module/UserClassManager'

export class UserClassList extends Component {
    componentDidMount() {
        const currentUser = sessionStorage.getItem("userId");
        const currentUserId = Number(currentUser);
        console.log("id", currentUserId)  
        
    }
  render() {

    // const currentUser = sessionStorage.getItem("userId");
    // const currentUserId = Number(currentUser);
    // let currentUserClasses = this.props.userClasses.filter(theClass => theClass.userId === currentUserId);
    // console.log("currentUserClasses:", currentUserClasses);
    console.log("test:", this.props.userClasses);
      
    return (
      <div>
        <h2>Your Classes</h2>
        {this.props.userClasses.map(eachClass => 
        <div key={eachClass.id}>
            <h3>{eachClass.class.className}</h3>
            <p>{eachClass.class.description}</p>
            <p>{eachClass.class.date}</p>
            <p>{eachClass.class.trainer}</p>
        </div>
            )}
      </div>
    )
  }
}

export default UserClassList
