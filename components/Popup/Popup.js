import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// material-ui components

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container ,Row, Col, Input, InputGroupAddon, InputGroupText, InputGroup, Modal, ModalBody, ModalFooter, FormGroup, Form } from "reactstrap";


export default function Popup(props) {

  const {
    handleDeleteTrue,
    handleDeleteFalse,
  } = props;

  return (
    <div className="modal">
      <div className="modal_box">
        <p>You sure you wanna delete?</p>
        <button className="modal_buttonCancel">Cancel</button>
        <button onClick={handleDeleteTrue} className="modal_buttoDelete">
          Confirm
        </button>
      </div>
    </div>
  );
}


