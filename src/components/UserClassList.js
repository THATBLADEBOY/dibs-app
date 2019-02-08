import React, { Component } from 'react'
import { Button } from 'reactstrap';
import UserClassManager from '../module/UserClassManager'
export class UserClassList extends Component {

    

    // state = {
    //     userClasses: []
    // }

    // deleteUserClass = (id) => {
    //     UserClassManager.removeAndList(id)
    //       .then(classes => this.setState({
    //         userClasses: classes
    //       }, () => null)
    //       )
    //   } 

    // componentDidMount() {
    //     let sessionId = sessionStorage.getItem("userId")
    //     console.log("teeest:", this.props.userClasses)
    //     UserClassManager.getUserSpecificClasses(sessionId)
    //     .then(allClasses => {
    //         this.setState({ userClasses: allClasses })
    //     })
        
        
    // }
        
  render() {

    // if (this.props.userClasses.length === 0) {
    //     return null
    //   }

      console.log("userClasses:", this.props.userClasses)
      
    return (
      <div>
        <h2>Your Classes</h2>
        <div className="class-list">
        {this.props.userClasses.map(eachClass => 
        <div className="class-container" key={eachClass.id}>
            <h3>{eachClass.class.className}</h3>
            <p>{eachClass.class.date} {eachClass.class.time}</p>
            <p>with {eachClass.class.trainerId}</p>
            <Button className="drop-class-button" color="danger" onClick={() => {
                    let deleteConfirmation = window.confirm(`Are you sure you want to delete ${eachClass.class.className} on ${eachClass.class.date}?`)
                    if(deleteConfirmation === true) {
                    this.props.deleteUserClass(eachClass.id)
                    this.props.removeSpotFromClass(eachClass.class)
                    }}}>Drop Class</Button>
        </div>
        
            )}
        </div>
      </div>
    )
  }
}

export default UserClassList
