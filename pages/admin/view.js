import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
// @material-ui/core components
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
// layout for this page
import Admin from "layouts/Admin.js";
import Button from '@material-ui/core/Button';
import RegularAccordion from "components/CustomAccordion/CustomAccordion.js";
import PanelAccordion from "components/PanelAccordion/PanelAccordion.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Container ,Row, Col, Input, InputGroupAddon, InputGroupText, InputGroup, Modal, ModalBody, ModalFooter, FormGroup, Form } from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {DataBContext} from 'components/Context/dataBContext';

const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
		  whiteSpace: 'nowrap'
        }
      }
    }
  })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  }
}));

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function View() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [data, setData] = useState([""]);
  const [dataTable, setDataTable] = useState([""]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(0);
  const [modalInfoi, setModalInfoi] = useState(0);
  const [dataVal, setDataVal] = useState([""]);
  const dbcontext = useContext(DataBContext);
  const dbname = dbcontext.data;
  const dbserver = "54.198.204.54";
  const dbport = "1337";

  const popupDialog = (value) => {
    setDataVal(data[value]);
    setModalOpen(!modalOpen);
    setModalInfo(value);
    setModalInfoi(value + 1);
  }

  const handleClose = () => {
      setModalOpen(!modalOpen);
  };

  useEffect(() => {
      axios.post('http://54.198.204.54:1337/auth/local', {
        identifier: 'peter.jensen@finclusionsystems.com',
        password: 'Test123!',
      }).then(resp => {

      var authtoken = "Bearer " + resp.data.jwt;
	  const headers = {
        'Authorization': authtoken,
        'accept': 'application/json'
      };

      const fulldbname = "http://" + dbserver + ":" + dbport + "/" + dbname;
      console.log("db setting5: ",fulldbname);
      axios.get(fulldbname, { headers })
        .then(response => {

        var resultsets = response.data;
        console.log("resultsets ",resultsets);
        var UsersArray = [];
        var UsersTableArray = [];
        for (let i = 0; i < resultsets.length; i++) {
          var name = resultsets[i].VaccineName;
          var recordNumber = parseInt(resultsets[i].RecordNumber, 10);
          var vaccineType = resultsets[i].VaccineType;
          var vaccineApplication = resultsets[i].VaccineApplication;
          var vaccineTarget = resultsets[i].VaccineTarget;
          var Emergence = resultsets[i].Emergence;
          var shortName = resultsets[i].ntShortName;
          var longName = resultsets[i].ntLongName;
          var fTarget = resultsets[i].FACTAtarget;
          var fGenome = resultsets[i].FACTAGenome;
          var sVariants = resultsets[i].SpikeVariants;
          var oVariants = resultsets[i].OtherVariants;
          var PANGO = resultsets[i].PANGO;
          var BVBRC = resultsets[i].BVBRC;
          var AminoAcid = resultsets[i].AminoAcid;
          var Conserved = resultsets[i].Conserved;
          var VariantTargets = resultsets[i].VariantTargets;
          var Description = resultsets[i].Description;
          var Category = resultsets[i].Category;
          var Type = resultsets[i].Type;
          var Subcategory = resultsets[i].Subcategory;
          var IPReference = resultsets[i].IPReference;
          var Phenotypes = resultsets[i].DOI;
          var PublicationSource = resultsets[i].PublicationSource;
          var REFlinks = resultsets[i].REFlinks;
          var Users = resultsets[i].Users;
          var Notes = resultsets[i].Notes;
          var Notes2 = resultsets[i].Notes2;
          var SigPepe = resultsets[i].Signal_Peptide_e;
          var NTDMut = resultsets[i].NTD_Mutation;
          var RBDMut = resultsets[i].RBD_Mutation;
          var S1S2Mut = resultsets[i].S1_S2_Mutation;
          var S2Mut = resultsets[i].S2_Mutation;
          var Sequences = resultsets[i].Sequences;
          var AtSc = resultsets[i].AmpTec_Sourcecode;

          var UserArray = [];
          var UserTableArray = [];
          UserArray.push("");
          UserTableArray.push("");
          UserArray.push(recordNumber);
          UserTableArray.push(recordNumber);
          UserArray.push(name);
          UserTableArray.push(name);
          UserArray.push(vaccineType);
          UserTableArray.push(vaccineType);
          UserArray.push(vaccineTarget);
          UserArray.push(vaccineApplication);
          UserTableArray.push(vaccineApplication);
          UserArray.push(Emergence);
          UserArray.push(shortName);
          UserArray.push(longName);
          UserArray.push(fTarget);
          UserArray.push(fGenome);
          UserArray.push(sVariants);
          UserArray.push(oVariants);
          UserArray.push(PANGO);
          UserArray.push(BVBRC);
          UserArray.push(AminoAcid);
          UserArray.push(Conserved);
          UserArray.push(VariantTargets);
          UserArray.push(Description);
          UserArray.push(Category);
          UserArray.push(Type);
          UserArray.push(Subcategory);
          UserArray.push(IPReference);
          UserArray.push(Phenotypes);
          UserArray.push(PublicationSource);
          UserArray.push(REFlinks);
          UserArray.push(Users);
          UserArray.push(Notes);
          UserArray.push(Notes2);
          UserArray.push(SigPepe);
          UserArray.push(NTDMut);
          UserArray.push(RBDMut);
          UserArray.push(S1S2Mut);
          UserArray.push(S2Mut);
          UserArray.push(Sequences);
          UserArray.push(AtSc);
          UsersArray.push(UserArray);
          UsersTableArray.push(UserTableArray);
        }

        setData(UsersArray);
        setDataTable(UsersTableArray);
      })
      .catch(error => {
        // handle error
        console.log("handle: ",error);
        if (error.response.status == 401) {
          alert("Authentication Error! Please login again");
        }
      });
    });
  }, []);

const columns = [
 {
   name: "",
   options: {
     filter: true,
     sort: false,
     customBodyRender: (value, tableMeta, updateValue) => {
       return (
         <Button style={{ color: "white", background: "black"}} variant="contained" onClick={() => popupDialog(tableMeta.rowIndex)}>
            Edit
         </Button>
       );
     }
   }
 },
 {
  name: "Record Number",
  options: {
   filter: true,
   sort: true,
   sortDirection: 'asc',
  }
 },
 {
  name: "Vaccine Name",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Vaccine Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Vaccine Application",
  options: {
   filter: true,
   sort: false,
  }
 }
];

const options = {
  filter: true,
  filterType: 'dropdown',
  responsive: 'vertical',
  selectableRows: false,
  print: false,
  sortOrder: {
   name: 'Record Number',
   direction: 'asc'
  }
};

  var categories=[
    {id:1, name: ["FACTA. Target","FACTA. Genome","Spike Variants","Other Variants"], indexes: [9,10,11,12], menu:"Structure"}];

  var entries=[
    {id:1, name: ["Phenotypes","Publication Source","REFlinks","Users","Notes","Source Note (SIB)","AmpTec_Sourcecode"], indexes: [23,24,25,26,27,28,35], menu:"References"}];

  var pentries=[
    {id:1, name: ["Vaccine Name","Vaccine Type","Vaccine Target","Emergence","Short Name","Long Name","Vaccine Application","PANGO Link","BV-BRC Link","Amino Acid","Conserved","Variant Targets","Description","Category","Type","Signal_Peptide_e","NTD_Mutation","RBD_Mutation","S1_S2_Mutation","S2_Mutation","Sequences","Subcategory","IPReference"], indexes: [2,3,4,6,7,8,5,13,14,15,16,17,18,19,20,29,30,31,32,33,34,21,22], menu:"Characterisation"}];

  return (
    <GridContainer>
      <Dialog fullWidth maxWidth="xl" onClose={() => setModalOpen(!modalOpen)} open={modalOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="confirmation-dialog-title">Review IDS Record {modalInfoi}</DialogTitle>
          <div className={classes.root}>

            {pentries.map((entry, index) => (
              <PanelAccordion classes={classes} category={entry} key={index} uid={index} data={dataVal} />
            ))}

            {categories.map((entry, index) => (
              <RegularAccordion classes={classes} category={entry} key={index} uid={index} data={dataVal} />
            ))}

            {entries.map((entry, index) => (
              <RegularAccordion classes={classes} category={entry} key={index} uid={index} data={dataVal} />
            ))}

          </div>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
      </Dialog>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="dark">
            <h4 className={classes.cardTitleWhite}>Immunogen Design & Selection</h4>
          </CardHeader>
          <CardBody>
            <MuiThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={" "}
                data={dataTable}
                columns={columns}
                options={options}
              />
            </MuiThemeProvider>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

View.layout = Admin;

export default View;
