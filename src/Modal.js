import ReactDOM from 'react-dom';
import React from 'react';

const Modal = (props) => {
    console.log(props);
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active" style={{ textAlign: "center" }}>
                <h1>RITIKA</h1>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;