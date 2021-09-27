import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {DataBContext} from 'components/Context/dataBContext';
// material-ui
import { Card, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// formiks
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import axios from 'axios';

// moment
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { useToasts } from 'react-toast-notifications';
// order components
import OrderProducts from './OrderProducts';

// netlify form encode
const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

// styles
const StyledButton = styled(Button)`
  width: 175px;
  color: white;
  background: black;

  @media screen and (min-width: 600px) {
    width: 300px;
  }
`;

const OrderForm = () => {
  const [tabValue, setTabValue] = useState(0);
  const { addToast } = useToasts();
  const theme = useTheme();
  const dbcontext = useContext(DataBContext);
  const dbserver = "54.198.204.54";
  const dbport = "1337";
  const dbname = dbcontext.data;
  const [iniValues, setIniValues] = useState([""]);
  const [valSchema, setValSchema] = useState([""]);
  const [forTit, setForTit] = useState([{name:'VaccineName', label:'Vaccine Name'}]);

  useEffect(() => {
    if (dbname === "ids") {
          setForTit([
          {name:'VaccineName', label:'Vaccine Name'},
          {name:'RecordNumber', label:'Record Number'},
          {name:'VaccineType', label:'Vaccine Type'},
          {name:'VaccineApplication', label:'Vaccine Application'},
          {name:'VaccineTarget', label:'Vaccine Target'},
          {name:'Emergence', label:'Emergence'},
          {name:'ntShortName', label:'ShortName'},
          {name:'ntLongName', label:'LongName'},
          {name:'FACTAtarget', label:'FACTAtarget'},
          {name:'AminoAcid', label:'Amino Acid'},
          {name:'Conserved', label:'Conserved'},
          {name:'VariantTargets', label:'Variant Targets'},
          {name:'Description', label:'Description'},
          {name:'Category', label:'Category'},
          {name:'Type', label:'Type'},
          {name:'Subcategory', label:'Subcategory'},
          {name:'IPReference', label:'IPReference'},
          {name:'PublicationSource', label:'Publication Source'},
          {name:'DOI', label:'DOI'},
          {name:'REFlinks', label:'REFlinks'},
          {name:'FACTAGenome', label:'FACTAGenome'},
          {name:'Notes', label:'Notes'},
          {name:'Users', label:'Users'},
          {name:'Notes2', label:'Notes2'},
          {name:'SpikeVariants', label:'Spike Variants'},
          {name:'OtherVariants', label:'Other Variants'},
          {name:'PANGO', label:'PANGO'},
          {name:'BVBRC', label:'BVBRC'},
          {name:'AmpTec_Sourcecode', label:'AmpTec Sourcecode'},
          {name:'Sequences', label:'Sequences'},
          {name:'Signal_Peptide_e', label:'Signal_Peptide_e'},
          {name:'NTD_Mutation', label:'NTD_Mutation'},
          {name:'RBD_Mutation', label:'RBD_Mutation'},
          {name:'S1_S2_Mutation', label:'S1_S2_Mutation'},
          {name:'S2_Mutation', label:'S2_Mutation'}
          ]);

          setIniValues({
            VaccineName: '',
            RecordNumber: '',
            VaccineType: '',
            VaccineApplication: '',
            VaccineTarget: '',
            Emergence: '',
            ntShortName: '',
            ntLongName: '',
            FACTAtarget: '',
            AminoAcid: '',
            Conserved: '',
            VariantTargets: '',
            Description: '',
            Category: '',
            Type: '',
            Subcategory: '',
            IPReference: '',
            PublicationSource: '',
            DOI: '',
            REFlinks: '',
            FACTAGenome: '',
            Notes: '',
            Users: '',
            Notes2: '',
            SpikeVariants: '',
            OtherVariants: '',
            PANGO: '',
            BVBRC: '',
            AmpTec_Sourcecode: '',
            Sequences: '',
            Signal_Peptide_e: '',
            NTD_Mutation: '',
            RBD_Mutation: '',
            S1_S2_Mutation: '',
            S2_Mutation: '',
            pick: !!tabValue,
          });

          setValSchema(Yup.object({
            VaccineName: Yup.string().required('Required'),
            RecordNumber: Yup.string().required('Required'),
            VaccineType: Yup.string().required('Required'),
            VaccineApplication: Yup.string().required('Required'),
            VaccineTarget: Yup.string().required('Required'),
            Emergence: Yup.string().required('Required'),
            ntShortName: Yup.string().required('Required'),
            ntLongName: Yup.string().required('Required'),
            FACTAtarget: Yup.string().required('Required'),
            AminoAcid: Yup.string().required('Required'),
            Conserved: Yup.string().required('Required'),
            VariantTargets: Yup.string().required('Required'),
            Description: Yup.string().required('Required'),
            Category: Yup.string().required('Required'),
            Type: Yup.string().required('Required'),
            Subcategory: Yup.string().required('Required'),
            IPReference: Yup.string().required('Required'),
            PublicationSource: Yup.string().required('Required'),
            DOI: Yup.string().required('Required'),
            REFlinks: Yup.string().required('Required'),
            FACTAGenome: Yup.string().required('Required'),
            Notes: Yup.string().required('Required'),
            Users: Yup.string().required('Required'),
            Notes2: Yup.string().required('Required'),
            SpikeVariants: Yup.string().required('Required'),
            OtherVariants: Yup.string().required('Required'),
            PANGO: Yup.string().required('Required'),
            BVBRC: Yup.string().required('Required'),
            AmpTec_Sourcecode: Yup.string().required('Required'),
            Sequences: Yup.string().required('Required'),
            Signal_Peptide_e: Yup.string().required('Required'),
            NTD_Mutation: Yup.string().required('Required'),
            RBD_Mutation: Yup.string().required('Required'),
            S1_S2_Mutation: Yup.string().required('Required'),
            S2_Mutation: Yup.string().required('Required'),
            pick: Yup.bool(),
          }));
    } else if (dbname === "norvax-lnps") {


          setForTit([
          {name:'LNP_Formulation_Name', label:'LNP Formulation Name'},
          {name:'Record_Number', label:'Record Number'},
          {name:'Formulation_Version', label:'Formulation Version'}
          ]);

           setIniValues({
            LNP_Formulation_Name: '',
            Record_Number: '',
            Formulation_Version: '',
            pick: !!tabValue,
          });

          setValSchema(Yup.object({
            LNP_Formulation_Name: Yup.string().required('Required'),
            Record_Number: Yup.string().required('Required'),
            Formulation_Version: Yup.string().required('Required'),
            pick: Yup.bool(),
          }));

    } else if ((dbname === "gb-t-bm-rna-ids") || (dbname === "ecam-sma-ids")) {

          setForTit([
          {name:'VaccineName', label:'Vaccine Name'},
          {name:'RecordNumber', label:'Record Number'},
          {name:'VaccineType', label:'Vaccine Type'},
          {name:'VaccineTarget', label:'Vaccine Target'},
          {name:'Emergence', label:'Emergence'},
          {name:'ntShortName', label:'ShortName'},
          {name:'ntLongName', label:'LongName'},
          {name:'VaccineApplication', label:'Vaccine Application'},
          {name:'Conserved', label:'Conserved'},
          {name:'VariantTargets', label:'Variant Targets'},
          {name:'Category', label:'Category'},
          {name:'Type', label:'Type'},
          {name:'Subcategory', label:'Subcategory'},
          {name:'Description', label:'Description'},
          {name:'FACTAtarget', label:'FACTAtarget'},
          {name:'FACTAGenome', label:'FACTAGenome'},
          {name:'AminoAcid', label:'Amino Acid'},
          {name:'IPReference', label:'IPReference'},
          {name:'PublicationSource', label:'Publication Source'},
          {name:'DOI', label:'DOI'},
          {name:'REFlinks', label:'REFlinks'},
          {name:'Notes', label:'Notes'},
          {name:'Users', label:'Users'},
          {name:'PANGO', label:'PANGO'},
          {name:'AmpTec_Sourcecode', label:'AmpTec Sourcecode'},
          {name:'RNAseqCHECK', label:'RNAseqCHECK'}
          ]);

          setIniValues({
            VaccineName: '',
            RecordNumber: '',
            VaccineType: '',
            VaccineTarget: '',
            Emergence: '',
            ntShortName: '',
            ntLongName: '',
            VaccineApplication: '',
            Conserved: '',
            VariantTargets: '',
            Category: '',
            Type: '',
            Subcategory: '',
            Description: '',
            FACTAtarget: '',
            FACTAGenome: '',
            AminoAcid: '',
            IPReference: '',
            PublicationSource: '',
            DOI: '',
            REFlinks: '',
            Notes: '',
            Users: '',
            PANGO: '',
            AmpTec_Sourcecode: '',
            RNAseqCHECK: '',
            pick: !!tabValue,
          });

          setValSchema(Yup.object({
            VaccineName: Yup.string().required('Required'),
            RecordNumber: Yup.string().required('Required'),
            VaccineType: Yup.string().required('Required'),
            VaccineTarget: Yup.string().required('Required'),
            Emergence: Yup.string().required('Required'),
            ntShortName: Yup.string().required('Required'),
            ntLongName: Yup.string().required('Required'),
            VaccineApplication: Yup.string().required('Required'),
            Conserved: Yup.string().required('Required'),
            VariantTargets: Yup.string().required('Required'),
            Category: Yup.string().required('Required'),
            Type: Yup.string().required('Required'),
            Subcategory: Yup.string().required('Required'),
            Description: Yup.string().required('Required'),
            FACTAtarget: Yup.string().required('Required'),
            FACTAGenome: Yup.string().required('Required'),
            AminoAcid: Yup.string().required('Required'),
            IPReference: Yup.string().required('Required'),
            PublicationSource: Yup.string().required('Required'),
            DOI: Yup.string().required('Required'),
            REFlinks: Yup.string().required('Required'),
            Notes: Yup.string().required('Required'),
            Users: Yup.string().required('Required'),
            PANGO: Yup.string().required('Required'),
            AmpTec_Sourcecode: Yup.string().required('Required'),
            RNAseqCHECK: Yup.string().required('Required'),
            pick: Yup.bool(),
          }));
    }
  }, []);


  const validate = values => {
    const errors = {};

    // Address
    if (!values.LNP_Formulation_Name && !values.VaccineName && tabValue === 0) {
      errors.street = 'No IDS data entered';
    }
    console.log("err: ",errors);
    return errors;
  };

  async function getUser(values) {
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
    console.log("db ",fulldbname);
    console.log("db1 ",values);
    axios.post(fulldbname, values, { headers })
      .then(response => {
		console.log("response posting strapi data: ",response);
        addToast("IDS Data posted.", {
		   appearance: 'success',
		   autoDismiss: true,
        });
      })
      .catch(error => {
        // handle error
        console.log("error posting strapi data: ",error);
        if (error.response.status == 401) {
          addToast("Authentication Error! Please login again", {
		    appearance: 'error',
		    autoDismiss: true,
          });
	    } else {
          addToast("Error posting strapi data: "+error, {
		    appearance: 'error',
		    autoDismiss: true,
          });
        }
      });
     });
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Formik
          enableReinitialize
          initialValues={iniValues}
          validationSchema={valSchema}
          validate={validate}
          onSubmit={(values, { resetForm }) => {
            values.pick = !!tabValue;
            getUser(values);
            resetForm();
          }}
        >
          {formik => (
		   <FieldArray>
            <Form name="Orders" data-netlify="true">
              <Card >
                <CardContent>

                  <Grid container spacing={2}>

                    {/* Products */}
                    <OrderProducts formik={formik} />

                    {forTit.map( (entry, index) => (
                      <Grid item xs={12} key={index.toString()}>
                         <Field fullWidth component={TextField} name={entry.name} type="text" label={entry.label} />
                      </Grid>
                    ))}

                  </Grid>
                </CardContent>
                <CardActions
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px' }}
                >
                  <StyledButton theme={theme} disabled={formik.isSubmitting} onClick={formik.submitForm} size="large">
                    Submit Data
                  </StyledButton>
                </CardActions>
              </Card>
            </Form>
           </FieldArray>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default OrderForm;
