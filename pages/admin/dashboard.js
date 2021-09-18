import React from "react";
import { useState, useContext } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Image from 'next/image'
import norvax from "assets/img/norvax.png";
import { bugs, website, server } from "variables/general.js";
import StorageIcon from '@material-ui/icons/Storage';
import {DataBContext} from 'components/Context/dataBContext';
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dbcontext = useContext(DataBContext);

  return (
    <div>
      <GridContainer>
        <Card profile>
		  <Image src={norvax} width={1642} height={878} layout='responsive'/>
		</Card>
        <GridItem xs={12} sm={6} md={3}>
          <Card bg="#FFA900">
            <CardHeader color="#FFA900"  stats icon>
              <CardIcon color="#FFA900" >
                <IconButton onClick={() => dbcontext.setData("ids")} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  MRNA-UCV-IDS
                </IconButton>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <IconButton  onClick={() => dbcontext.setData("norvax-lnps")} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  NORVAX-LNPS
                </IconButton>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                 <IconButton  onClick={() => dbcontext.setData("gb-t-bm-rna-ids")} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  GBTBMRNA-IDS
                </IconButton>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <IconButton  onClick={() => dbcontext.setData("ecam-sma-ids")} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  ECAM-SMA-IDS
                </IconButton>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
