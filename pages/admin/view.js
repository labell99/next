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

function builderids (resultsets, setData, setDataTable) {
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
};

function builderlnps (resultsets, setData, setDataTable) {
        var UsersArray = [];
        var UsersTableArray = [];
        for (let i = 0; i < resultsets.length; i++) {
          var name = resultsets[i].LNP_Formulation_Name;
          var recordNumber = parseInt(resultsets[i].Record_Number, 10);
          var formulationVersion = resultsets[i].Formulation_Version;
          var users = resultsets[i].Users;
          var aiAnalyticsReport = resultsets[i].AI_Analytics_Report;
          var norvaxNotes = resultsets[i].Norvax_Notes;
          var refLinks = resultsets[i].REF_Links;
          var sintefNotes = resultsets[i].SINTEF_Notes;
          var lipid11 = resultsets[i].Lipid_1_1;
          var lipid12 = resultsets[i].Lipid_1_2;
          var lipid13 = resultsets[i].Lipid_1_3;
          var lipid14 = resultsets[i].Lipid_1_4;
          var lipid21 = resultsets[i].Lipid_2_1;
          var lipid22 = resultsets[i].Lipid_2_2;
          var lipid23 = resultsets[i].Lipid_2_3;
          var lipid24 = resultsets[i].Lipid_2_4;
          var lipid31 = resultsets[i].Lipid_3_1;
          var lipid32 = resultsets[i].Lipid_3_2;
          var lipid33 = resultsets[i].Lipid_3_3;
          var lipid34 = resultsets[i].Lipid_3_4;
          var lipid41 = resultsets[i].Lipid_4_1;
          var lipid42 = resultsets[i].Lipid_4_2;
          var lipid43 = resultsets[i].Lipid_4_3;
          var lipid44 = resultsets[i].Lipid_4_4;
          var preclin = resultsets[i].Preclin_Data;

          var UserArray = [];
          var UserTableArray = [];
          UserArray.push("");
          UserTableArray.push("");
          UserArray.push(recordNumber);
          UserTableArray.push(recordNumber);
          UserArray.push(name);
          UserTableArray.push(name);
          UserArray.push(formulationVersion);
          UserTableArray.push(formulationVersion);
          UserArray.push(aiAnalyticsReport);
          UserArray.push(users);
          UserTableArray.push(users);
          UserArray.push(norvaxNotes);
          UserArray.push(refLinks);
          UserArray.push(sintefNotes);
          UserArray.push(lipid11);
          UserArray.push(lipid12);
          UserArray.push(lipid13);
          UserArray.push(lipid14);
          UserArray.push(lipid21);
          UserArray.push(lipid22);
          UserArray.push(lipid23);
          UserArray.push(lipid24);
          UserArray.push(lipid31);
          UserArray.push(lipid32);
          UserArray.push(lipid33);
          UserArray.push(lipid34);
          UserArray.push(lipid41);
          UserArray.push(lipid42);
          UserArray.push(lipid43);
          UserArray.push(lipid44);
          UserArray.push(preclin);

          UsersArray.push(UserArray);
          UsersTableArray.push(UserTableArray);
        }

        setData(UsersArray);
        setDataTable(UsersTableArray);
};

function buildergbs (resultsets, setData, setDataTable) {
        console.log("restes: ",resultsets);

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
          var PANGO = resultsets[i].PANGO;
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
          var AtSc = resultsets[i].AmpTec_Sourcecode;
          var RNACHECK = resultsets[i].RNAseqCHECK;

          var UserArray = [];
          var UserTableArray = [];
          UserArray.push("");
          UserTableArray.push("");




        }

}

function buildergbss (resultsets, setData, setDataTable) {
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
          var PANGO = resultsets[i].PANGO;
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
          var AtSc = resultsets[i].AmpTec_Sourcecode;
          var RNACHECK = resultsets[i].RNAseqCHECK;

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
          UserArray.push(PANGO);
          UserArray.push(AminoAcid);
          UserArray.push(Conserved);
          UserArray.push(VariantTargets);
          UserArray.push(Description);
          UserArray.push(Category);
          UserArray.push(Type);
          UserArray.push(Subcategory);
          UserArray.push(IPReferences);
          UserArray.push(Phenotypes);
          UserArray.push(PublicationSource);
          UserArray.push(REFlinks);
          UserArray.push(Users);
          UserArray.push(Notes);
          UserArray.push(Notes2);
          UserArray.push(RNACHECK);
          UserArray.push(AtSc);
          UsersArray.push(UserArray);
          UsersTableArray.push(UserTableArray);
        }

        setData(UsersArray);
        setDataTable(UsersTableArray);
};


function buildersma (resultsets, setData, setDataTable) {
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
          var PANGO = resultsets[i].PANGO;
          var AminoAcid = resultsets[i].AminoAcid;
          var Conserved = resultsets[i].Conserved;
          var VariantTargets = resultsets[i].VariantTargets;
          var Description = resultsets[i].Description;
          var Category = resultsets[i].Category;
          var Type = resultsets[i].Type;
          var Subcategory = resultsets[i].Subcategory;
          var IPReference = resultsets[i].IPReferences;
          var Phenotypes = resultsets[i].DOI;
          var PublicationSource = resultsets[i].PublicationSource;
          var REFlinks = resultsets[i].REFlinks;
          var Users = resultsets[i].Users;
          var Notes = resultsets[i].Notes;
          var Notes2 = resultsets[i].Notes2;
          var AtSc = resultsets[i].AmpTec_Sourcecode;
          var RNACHECK = resultsets[i].RNAseqCHECK;

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
          UserArray.push(PANGO);
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
          UserArray.push(RNACHECK);
          UserArray.push(AtSc);
          UsersArray.push(UserArray);
          UsersTableArray.push(UserTableArray);
        }

        setData(UsersArray);
        setDataTable(UsersTableArray);
};

function View() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [data, setData] = useState([""]);
  const [tableName, setTableName] = useState([""]);
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
      axios.get(fulldbname, { headers })
        .then(response => {
          if (dbname === "ids") {
			setTableName("Immunogen Design & Selection");
            builderids(response.data,setData,setDataTable);
	      } else if (dbname === "norvax-lnps") {
			setTableName("Norvax LNPS");
            builderlnps(response.data, setData, setDataTable);
	      } else if (dbname === "gb-t-bm-rna-ids") {
			setTableName("GBTBMRNA IDS");
            buildergbs(response.data, setData, setDataTable);
	      } else if (dbname === "ecam-sma-ids") {
			setTableName("ECAM-SMA IDS");
            buildersma(response.data, setData, setDataTable);
          }
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

if (dbname === "norvax-lnps") {
  columns[2].name="Formulation Name";
  columns[3].name="Formulation Version";
  columns[4].name="Users";
};

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

  if (dbname === "ids") {
    var categories=[
    {id:1, name: ["FACTA. Target","FACTA. Genome","Spike Variants","Other Variants"], indexes: [9,10,11,12], menu:"Structure"}];
    var entries=[
    {id:1, name: ["Phenotypes","Publication Source","REFlinks","Users","Notes","Source Note (SIB)","AmpTec_Sourcecode"], indexes: [23,24,25,26,27,28,35], menu:"References"}];
    var pentries=[
    {id:1, name: ["Vaccine Name","Vaccine Type","Vaccine Target","Emergence","Short Name","Long Name","Vaccine Application","PANGO Link","BV-BRC Link","Amino Acid","Conserved","Variant Targets","Description","Category","Type","Signal_Peptide_e","NTD_Mutation","RBD_Mutation","S1_S2_Mutation","S2_Mutation","Sequences","Subcategory","IPReferences"], indexes: [2,3,4,6,7,8,5,13,14,15,16,17,18,19,20,29,30,31,32,33,34,21,22], menu:"Characterisation"}];
  } else if (dbname === "norvax-lnps") {
    var pentries=[
    {id:1, name: ["Name","Version","Lipid 1.1","Lipid 1.2","Lipid 1.3","Lipid 1.4","Lipid 2.1","Lipid 2.2","Lipid 2.3","Lipid 2.4","Lipid 3.1","Lipid 3.2","Lipid 3.3","Lipid 3.4","Lipid 4.1","Lipid 4.2","Lipid 4.3","Lipid 4.4","REF Links","AI Analytics Report","Norvax Notes","SINTEF Notes","Users","Preclinical Data and Toxicology"], indexes: [2,3,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,7,4,6,8,5,25], menu:"Formulation"}];
    var entries=[];
    var categories=[];
  } else if (dbname === "gb-t-bm-rna-ids") {
    var pentries=[
    {id:1, name: ["Vaccine Name","Vaccine Type","Vaccine Target","Emergence","Short Name","Long Name","Vaccine Application","PANGO Link","FACTA target","Amino Acid","Conserved","Variant Targets","Description","Category","Type","Subcategory","IPReferences","PublicationSource", "DOI", "REFlinks", "FACTAGenome", "Notes", "Users", "AmpTec_Sourcecode", "RNAseqCHECK" ], indexes: [2,3,4,6,7,8,5,11,9,12,13,14,15,16,17,18,19,21,20,22,10,24,23,27,26], menu:"Characterisation"}];
    var entries=[];
    var categories=[];
  } else if (dbname === "ecam-sma-ids") {
    var pentries=[
    {id:1, name: ["Vaccine Name","Vaccine Type","Vaccine Target","Emergence","Short Name","Long Name","Vaccine Application","Conserved","Variant Targets","Category","Type","Subcategory"], indexes: [2,3,4,6,7,8,5,13,14,16,17,18], menu:"Characterisation"}];
    var entries=[];
    var categories=[
	{id:1, name: ["Description","FACTA. Target","FACTA. Genome","Amino Acid","IPReferences","PublicationSource","DOI","REFlinks","Notes","Users","PANGO Link","AmpTec_Sourcecode","RNAseqCHECK"], indexes: [15,9,10,12,19,21,20,22,24,23,11,27,26], menu:"Structure"}];
  };

  return (
    <GridContainer>
      <Dialog fullWidth maxWidth="xl" onClose={() => setModalOpen(!modalOpen)} open={modalOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="confirmation-dialog-title">Review Record {modalInfoi}</DialogTitle>
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
            <h4 className={classes.cardTitleWhite}>{tableName}</h4>
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
