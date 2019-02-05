import React, { Component } from 'react'
import { Button } from 'reactstrap';
export class UserClassList extends Component {
        
  render() {
      
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
            <Button color="danger">Drop Class</Button>
        </div>
        
            )}
        </div>
      </div>
    )
  }
}

export default UserClassList
