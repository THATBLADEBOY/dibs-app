import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
        <Button color="info" onClick={this.toggle}>info</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{this.props.classTitle}</ModalHeader>
          <ModalBody>
            <strong>{this.props.classInfo}</strong>
            <br/>
            <br/>
            <strong>Trainer:</strong> {this.props.classTrainer}
            <br/>
            <br/>
            <strong>Expected Duration:</strong> {this.props.duration}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sweet, Thanks!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;