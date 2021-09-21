import React, { useState, useContext } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import OrderForm from 'components/Form';
import {DataBContext} from 'components/Context/dataBContext';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

function Create() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dbcontext = useContext(DataBContext);
  const dbname = dbcontext.data;
  const [tableName, setTableName] = useState([dbname]);


  setTableName("Input Immunogen Design & Selection Data");


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="dark">
              <h4 className={classes.cardTitleWhite}>{tableName}</h4>
            </CardHeader>
            <CardBody>

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Create.layout = Admin;

export default Create;
