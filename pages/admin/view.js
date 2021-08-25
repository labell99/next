import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
// layout for this page
import Admin from "layouts/Admin.js";
import Button from '@material-ui/core/Button'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Input, InputGroupAddon, InputGroupText, InputGroup, Modal, ModalBody, ModalFooter, FormGroup, Form } from "reactstrap";

const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
		  whiteSpace: 'nowrap'
        }
      }
    }
  })


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
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  function popupDialog(value) {
    setModalOpen(!modalOpen);
    //window.alert(`Clicked "Edited" for row ${value}`);
  }

  useEffect(() => {
    axios.post('http://54.198.204.54:1337/auth/local', {
      identifier: 'lee_abell@hotmail.com',
      password: 'Test123!',
    }).then(resp => {

      var authtoken = "Bearer " + resp.data.jwt;
	  const headers = {
        'Authorization': authtoken,
        'accept': 'application/json'
      };

      axios.get(`http://54.198.204.54:1337/ids`, { headers })
        .then(response => {

        var resultsets = response.data;
        console.log("resultsets ",resultsets);
        var UsersArray = [];
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

          var UserArray = [];
          UserArray.push("");
          UserArray.push(recordNumber);
          UserArray.push(name);
          UserArray.push(vaccineType);
          UserArray.push(vaccineTarget);
          UserArray.push(vaccineApplication);
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
          UsersArray.push(UserArray);
        }

        setData(UsersArray);
      })
      .catch(error => {
        // handle error
        console.log(error);
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
  name: "Vaccine Target",
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
 },
 {
  name: "Emergence",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Nucliotide ShortName",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Nucliotide LongName",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "FACTA Target",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "FACTA Genome",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Spike Variants",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Other Variants",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "PANGO",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "BVBRC",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Amino Acid",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Conserved",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Variant Targets",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Description",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Category",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Subcategory",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "IPReference",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Phenotypes",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "PubSource",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "RefLinks",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Users",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Notes",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Source Note (SIB)",
  options: {
   filter: true,
   sort: false,
  }
 },
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

  return (
          <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
            <div className=" modal-body p-0">
              <Card className=" bg-secondary shadow border-0">
                <CardHeader className=" bg-white pb-5">
                  <div className=" text-muted text-center mb-3">
                    <small>Sign in with</small>
                  </div>
                </CardHeader>
                <CardBody className=" px-lg-5 py-lg-5">
                  <div className=" text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <Form role="form">
                    <FormGroup className=" mb-3">
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email"></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Password" type="password"></Input>
                      </InputGroup>
                    </FormGroup>
                    <div className=" custom-control custom-control-alternative custom-checkbox">
                      <input
                        className=" custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      ></input>
                      <label
                        className=" custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span>Remember me</span>
                      </label>
                    </div>
                    <div className=" text-center">
                      <Button className=" my-4" color="primary" type="button">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Modal>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="dark">
            <h4 className={classes.cardTitleWhite}>Immunogen Design & Selection</h4>
          </CardHeader>
          <CardBody>
            <MuiThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={" "}
                data={data}
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
