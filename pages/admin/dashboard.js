import React from "react";
import { useState, useContext, useEffect } from "react";
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
import Typography from '@material-ui/core/Typography'
import { useToasts } from 'react-toast-notifications';

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dbcontext = useContext(DataBContext);
  var   dbname = dbcontext.data;
  const { addToast } = useToasts();

  var state, tcontent;
  var title = dbname;

  iniState(dbname);

  const [button, setButton] = useState({currentButton: state});
  const [dataset, setDataSet] = useStickyState("ids", "dataSet");

  useEffect(() => {
	console.log("db1: ", dbname);
	console.log("db2: ", dataset);
	console.log("db3: ", state);
    if (dbname !== dataset) {
	  dbname = dataset;
	  iniState(dbname);
	  setButton({ currentButton: state });
      dbcontext.setData(dataset);
	}
  }, [dataset]);

  function iniState(db) {
    if (db === "ids") {
      state = 0;
      title = "MRNA-UCV-IDS";
    } else if (db === "norvax-lnps") {
      state = 1;
      title = "NORVAX-LNPS";
    } else if (db === "gb-t-bm-rna-ids") {
      state = 2;
      title = "GBTBMRNA-IDS";
    } else if (db === "ecam-sma-ids") {
      state = 3;
      title = "ECAM-SMA-IDS";
    }
  };

  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(defaultValue);

    React.useEffect(() => {
      const stickyValue = window.localStorage.getItem(key);

      if (stickyValue !== null) {
        setValue(JSON.parse(stickyValue));
      }
    }, [key]);

    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }

  function onButtonClicked (datab, id) {
	console.log("dut click: ", datab);
	dbcontext.setData(datab);
    setButton({ currentButton: id });
    setDataSet(datab);
    console.log("dut db2: ", dataset);
    tcontent = datab;
    if (datab === "ids") {
      tcontent = "mrna-ucv-ids";
    }

    addToast("Dataset " + tcontent + " selected.", {
	  appearance: 'success',
	  autoDismiss: true,
    });
  }

  return (
    <div>
      <Typography variant="body1">Current Dataset: {title}.</Typography>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card >
            <CardHeader  color={button.currentButton === 0 ? "primary" : "warning" }  stats icon>
              <CardIcon  color={button.currentButton === 0 ? "primary" : "warning" }>
                <Button disableRipple disableTouchRipple onMouseDown={() => onButtonClicked("ids",0)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  MRNA-UCV-IDS
                </Button>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card >
            <CardHeader color={button.currentButton === 1 ? "primary" : "success"} stats icon>
              <CardIcon color={button.currentButton === 1 ? "primary" : "success"}>
                <Button disableRipple disableTouchRipple onMouseDown={() => onButtonClicked("norvax-lnps",1)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  NORVAX-LNPS
                </Button>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card >
            <CardHeader color={button.currentButton === 2 ? "primary" : "danger"} stats icon>
              <CardIcon color={button.currentButton === 2 ? "primary" : "danger"}>
                 <Button disableRipple disableTouchRipple onMouseDown={() => onButtonClicked("gb-t-bm-rna-ids",2)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  GBTBMRNA-IDS
                </Button>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card >
            <CardHeader color={button.currentButton === 3 ? "primary" : "info"} stats icon>
              <CardIcon color={button.currentButton === 3 ? "primary" : "info"}>
                <Button disableRipple disableTouchRipple onMouseDown={() => onButtonClicked("ecam-sma-ids",3)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  ECAM-SMA-IDS
                </Button>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <Card profile>
		  <Image src={norvax} width={1642} height={878} layout='responsive'/>
		</Card>
      </GridContainer>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
