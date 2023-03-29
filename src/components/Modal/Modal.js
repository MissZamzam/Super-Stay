import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
  const [show, setShow] = useState(false);

  return (
    <>
     <button onClick={() => setShow(true)} >Product Description</button> 

    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.description}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example