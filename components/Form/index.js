import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

// material-ui
import { Card, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Button } from 'gatsby-theme-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// formiks
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import axios from 'axios';

// moment
import MomentUtils from '@date-io/moment';
import moment from 'moment';

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
  background: #0073BF;

  @media screen and (min-width: 600px) {
    width: 300px;
  }
`;

const OrderForm = () => {
  const [price, setPrice] = useState(50);
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  const validate = values => {
    const errors = {};

    // Address
    if (!values.VaccineName && tabValue === 0) {
      errors.street = 'No IDS data entered';
    }

    return errors;
  };

  async function getUser(values) {
	console.log("val ",values);
    try {
      var resp = await axios.post('http://54.198.204.54:1337/auth/local', {
         identifier: 'lee_abell@hotmail.com',
         password: 'Test123!',
      });
      var authtoken = "Bearer " + resp.data.jwt;
	  const headers = {
        'Authorization': authtoken,
        'accept': 'application/json'
      };
      const responseg = await axios.get(`http://54.198.204.54:1337/ids`, { headers });
      const response = await axios.post(`http://54.198.204.54:1337/ids`, values);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Formik
          initialValues={{
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
            pick: !!tabValue,
          }}
          validationSchema={Yup.object({
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
            pick: Yup.bool(),
          })}
          validate={validate}
          onSubmit={(values, actions) => {
			console.log("submit");
            values.pick = !!tabValue;
            getUser(values);
          }}
        >
          {formik => (
            <Form name="Orders" data-netlify="true">
              <Card >
                <CardContent>

                  <Grid container spacing={2}>
                    {/* Products */}
                    <OrderProducts formik={formik} />

                    {/* VaccineName */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineName" type="text" label="Vaccine Name" />
                    </Grid>

                    {/* RecordNumber */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="RecordNumber" type="text" label="Record Number" />
                    </Grid>

                    {/* VaccineType */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineType" type="text" label="Vaccine Type" />
                    </Grid>

                    {/* VaccineApplication */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineApplication" type="text" label="Vaccine Application" />
                    </Grid>

                    {/* VaccineTarget */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineTarget" type="text" label="Vaccine Target" />
                    </Grid>

                    {/* Emergence */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Emergence" type="text" label="Emergence" />
                    </Grid>


                    {/* ShortName */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="ntShortName" type="text" label="Nucleotide ShortName" />
                    </Grid>

                    {/* LongName */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="ntLongName" type="text" label="Nucleotide LongName" />
                    </Grid>

                    {/* FACTAtarget */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="FACTAtarget" type="text" label="FACTAtarget" />
                    </Grid>

                    {/* AminoAcid */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="AminoAcid" type="text" label="Amino Acid" />
                    </Grid>

                    {/* Conserved */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Conserved" type="text" label="Conserved" />
                    </Grid>

                    {/* VariantTargets */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VariantTargets" type="text" label="Variant Targets" />
                    </Grid>


                    {/* Description */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Description" type="text" label="Description" />
                    </Grid>

                    {/* Category */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Category" type="text" label="Category" />
                    </Grid>

                    {/* Type */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Type" type="text" label="Type" />
                    </Grid>

                    {/* Subcategory */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Subcategory" type="text" label="Subcategory" />
                    </Grid>

                    {/* IPReference */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="IPReference" type="text" label="IP Reference" />
                    </Grid>

                    {/* PublicationSource */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="PublicationSource" type="text" label="Publication Source" />
                    </Grid>


                    {/* Phenotypes */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="DOI" type="text" label="Phenotypes" />
                    </Grid>

                    {/* REFlinks */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="REFlinks" type="text" label="Ref Links" />
                    </Grid>

                    {/* FACTAGenome */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="FACTAGenome" type="text" label="FACTAGenome" />
                    </Grid>

                    {/* Notes */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Notes" type="text" label="Notes" />
                    </Grid>

                    {/* Users */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Users" type="text" label="Users" />
                    </Grid>

                     {/* Variant Source Note */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Notes2" type="text" label="Variant Source Note (SIB)" />
                    </Grid>

                    {/* SpikeVariants */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="SpikeVariants" type="text" label="Spike Variants" />
                    </Grid>

                    {/* OtherVariants */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="OtherVariants" type="text" label="Other Variants" />
                    </Grid>

                    {/* PANGO */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="PANGO" type="text" label="PANGO" />
                    </Grid>

                    {/* BVBRC */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="BVBRC" type="text" label="BVBRC" />
                    </Grid>

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
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default OrderForm;
