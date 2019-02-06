import React, { Component } from 'react'
import { Button } from 'reactstrap';
export class UserClassList extends Component {
        
  render() {
    console.log(this.props.userClasses.map(eachClass => eachClass.class.className))
    if (this.props.userClasses.length === 0) {
        return null
      }

      console.log("userClasses:", this.props.userClasses)
      
    return (
      <div>
        <h2>Your Classes</h2>
        <div className="class-list">
        {this.props.userClasses.map(eachClass => 
        <div className="class-container" key={eachClass.id}>
            <h3>{eachClass.class.className}</h3>
            <p>{eachClass.class.description}</p>
            <p>{eachClass.class.date}</p>
            <p>{eachClass.class.trainer}</p>
            <Button color="danger" onClick={() => {
                    let deleteConfirmation = window.confirm(`Are you sure you want to delete ${eachClass.class.className} on ${eachClass.class.date}?`)
                    if(deleteConfirmation === true) {
                    this.props.deleteUserClass(eachClass.id)
                    }}}>Drop Class</Button>
        </div>
        
            )}
        </div>
      </div>
    )
  }
}

export default UserClassList
