import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Moment from 'react-moment';


export class UserClassList extends Component {

  



        
  render() {

      
    return (
      <div>
        <h2>Your Classes</h2>
        <div className="class-list">
        {this.props.userClasses.map(eachClass => 
        <div className="class-container" key={eachClass.id}>
            <h3>{eachClass.class.className}</h3>
            <Moment format="ddd MMM DD, YYYY">{eachClass.class.date}</Moment>
            <p>{eachClass.class.time}</p>
            <p>with {eachClass.class.trainerId}</p>
            <div className="userClass-buttons">
            <Button className="drop-class-button" color="danger" onClick={() => {
                    let deleteConfirmation = window.confirm(`Are you sure you want to delete ${eachClass.class.className} on ${eachClass.class.date}?`)
                    if(deleteConfirmation === true) {
                    this.props.deleteUserClass(eachClass.id)
                    this.props.removeSpotFromClass(eachClass.class)
                    }}}>Drop Class</Button>
            </div>
        </div>
        
            )}
        </div>
      </div>
    )
  }
}

export default UserClassList
