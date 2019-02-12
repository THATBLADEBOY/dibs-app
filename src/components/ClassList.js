import React, { Component } from 'react';
import ClassCard from './ClassCard'

export class ClassList extends Component {
  render() {
    return (
      <div>
        <h2>Available Classes</h2>
        <div className="class-list  available-classes">
        {this.props.classes.map(theClasses => 
        <ClassCard 
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