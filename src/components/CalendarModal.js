import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddToCalendar from 'react-add-to-calendar';

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      event: {
        title: this.props.event.title,
        description: this.props.event.description,
        location: '952 Main St, Nashville, TN 37206',
        startTime: this.props.event.startTime,
        endTime: this.props.event.endTime
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button color="info" onClick={this.toggle}>Add To Calendar</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Add To Calendar</ModalHeader>
          <ModalBody>
          <AddToCalendar optionsOpen={true} event={this.state.event}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sweet, Thanks!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CalendarModal;