import React, { Component } from 'react'
import UserClassCard from './UserClassCard'
export class UserClassList extends Component {
     
  render() { 

   
    return (
      <div>
        <h2>Your Classes</h2>
        <div className="class-list">
        {this.props.userClasses.map(eachClass => 
        
        <UserClassCard 
        key={eachClass.id}
         eachClass={eachClass}
         deleteUserClass={this.props.deleteUserClass}
         removeSpotFromClass={this.props.removeSpotFromClass}
         />
            )}
        </div>
      </div>
    )
  }
}

export default UserClassList
