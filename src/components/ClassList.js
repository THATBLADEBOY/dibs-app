import React, { Component } from 'react';
import ClassCard from './ClassCard'


// window.setInterval(function(){ // Set interval for checking
//     var date = theClasses.date// Create a Date object to find out what time it is
//     if(date.getHours() === 8 && date.getMinutes() === 0){ // Check the time
//         // Do stuff
//     }
// }, 60000); // Repeat every 60000 milliseconds (1 minute)

export class ClassList extends Component {
  render() {
    return (
      <div>
        <h2>Available Classes</h2>
        <div className="class-list  available-classes">
        {this.props.classes.map(theClasses => 
        <ClassCard 
        usersInClass={this.props.usersInClass}
            getUsersInClass={this.props.getUsersInClass}
          history={this.props.history}
          dibsFunction={this.props.dibsFunction} 
          key={theClasses.id} 
          class={theClasses} 
         />
        )}
        </div>
      </div>
    )
  }
}
export default ClassList