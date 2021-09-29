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
import createPersistedState from "use-persisted-state";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dbcontext = useContext(DataBContext);
  const dbname = dbcontext.data;
  const { addToast } = useToasts();
  const useDataState = createPersistedState("button");
  const [datastate, setDataState] = useDataState("ids");
  var state, tcontent;
  var title = dbname;

  if (dbname === "ids") {
    state = 0;
    title = "MRNA-UCV-IDS";
  } else if (dbname === "norvax-lnps") {
    state = 1;
    title = "NORVAX-LNPS";
  } else if (dbname === "gb-t-bm-rna-ids") {
    state = 2;
    title = "GBTBMRNA-IDS";
  } else if (dbname === "ecam-sma-ids") {
    state = 3;
    title = "ECAM-SMA-IDS";
  }

  const [button, setButton] = useState({currentButton: state});

  useEffect(() => {
	const persistedStore = loadFromLocalStorage();
	console.log("db1: ", dbname);
	console.log("db2: ", datastate);
	console.log("db3: ", persistedStore);
    //if (dbname !== datastate) {
    //  dbcontext.setData(datastate);
	//}
  }, []);

  const saveToLocalStorage = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('state');
      return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };


  function onButtonClicked (datab, id) {
	dbcontext.setData(datab);
    setButton({ currentButton: id });
    setDataState(dbname);
    saveToLocalStorage(dbname);
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
                <IconButton onTouchTap={() => onButtonClicked("ids",0)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  MRNA-UCV-IDS
                </IconButton>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card >
            <CardHeader color={button.currentButton === 1 ? "primary" : "success"} stats icon>
              <CardIcon color={button.currentButton === 1 ? "primary" : "success"}>
                <IconButton onTouchTap={() => onButtonClicked("norvax-lnps",1)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  NORVAX-LNPS
                </IconButton>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card >
            <CardHeader color={button.currentButton === 2 ? "primary" : "danger"} stats icon>
              <CardIcon color={button.currentButton === 2 ? "primary" : "danger"}>
                 <IconButton onTouchTap={() => onButtonClicked("gb-t-bm-rna-ids",2)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  GBTBMRNA-IDS
                </IconButton>
              </CardIcon>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card >
            <CardHeader color={button.currentButton === 3 ? "primary" : "info"} stats icon>
              <CardIcon color={button.currentButton === 3 ? "primary" : "info"}>
                <IconButton onTouchTap={() => onButtonClicked("ecam-sma-ids",3)} style={{fontSize: '12px', color: 'white'}}>
                  <StorageIcon />
                  ECAM-SMA-IDS
                </IconButton>
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
