import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        test text
      </div>
    </div>
  );
};


export default Modal;