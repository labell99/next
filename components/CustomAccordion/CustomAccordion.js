import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// material-ui components
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container ,Row, Col, Input, InputGroupAddon, InputGroupText, InputGroup, Modal, ModalBody, ModalFooter, FormGroup, Form } from "reactstrap";

export default function RegularAccordion(props) {

  const {
    classes,
    category,
    uid,
    data
  } = props;

  let keyv = uid || 0;

  return (
    <Accordion key={keyv.toString()}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" className={classes.heading}> {category.menu} </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="row" spacing={2}>
          <Grid container spacing={2} direction="column">
            {category.name.map((subcategory, cur) => (
	          <Grid item key={cur.toString()}>
	            <InputGroup>
	     	      <InputGroupAddon addonType="prepend">
	     	        <Typography style={{ fontWeight: 600 }}>{subcategory}</Typography>
	     	      </InputGroupAddon>
	     	      <TextField
	     		    id="outlined-multiline-flexible"
	     		    multiline
	     		    fullWidth
	     		    className={classes.textField}
	     		    margin="normal"
	     		    variant="outlined"
	     		    value={data[category.indexes[cur]]}
	              />
	            </InputGroup>
	          </Grid>
            ))}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}


