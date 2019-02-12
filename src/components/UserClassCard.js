import React, { Component } from 'react'
import { Button, Dropdown } from 'reactstrap';
import Moment from 'react-moment';
import AddToCalendar from 'react-add-to-calendar';

export class UserClassCard extends Component {

    state = {
        event: {
          title: this.props.eachClass.class.className,
          description: this.props.eachClass.class.description,
          location: 'The Gym',
          startTime: new Date(this.props.eachClass.class.date).toISOString(),
          endTime: '2020-01-03T21:45:00-04:00'
        }
    }

  render() {

    var startDate = new Date(this.props.eachClass.class.date).toISOString();
    console.log("check", startDate); 
      let eachClass = this.props.eachClass
      let formattedStartDate = <Moment format="YYYY-MM-DD">{this.props.eachClass.class.date}</Moment>
    console.log(formattedStartDate)
    return (
        <div className="class-container" key={eachClass.id}>
        <h3>{eachClass.class.className}</h3>
        <Moment format="ddd MMM DD, YYYY">{eachClass.class.date}</Moment>
        <p>{eachClass.class.time}</p>
        <p>with {eachClass.class.trainerId}</p>
        <div className="userClass-buttons">
        <AddToCalendar event={this.state.event}/>
        <Button className="drop-class-button" color="danger" onClick={() => {
                let deleteConfirmation = window.confirm(`Are you sure you want to delete ${eachClass.class.className} on ${eachClass.class.date}?`)
                if(deleteConfirmation === true) {
                this.props.deleteUserClass(eachClass.id)
                this.props.removeSpotFromClass(eachClass.class)
                }}}>Drop Class</Button>
        </div>
    </div>
    )
  }
}

export default UserClassCard
