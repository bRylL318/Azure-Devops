import React from 'react';
import {
  Card,
  Grid,
  Box,
  CardContent,
  Typography
} from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Card style={{ width: 400, height: 400, marginTop: 200 }}>
            <CardContent>
              <Typography variant='h2' textAlign='center'>Contact Number</Typography>
              <Typography variant='body1' textAlign='center'>Phone: +1 (123) 456-7890</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ width: 400, height: 400, marginTop: 200 }}>
            <CardContent>
              <Typography variant='h2' textAlign='center'>Email</Typography>
              <Typography variant='body1' textAlign='center'>exampleemail@gmail.com</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ width: 400, height: 400, marginTop: 200 }}>
            <CardContent>
              <Typography variant='h2' textAlign='center'>Location</Typography>
              <Typography variant='body1' textAlign='center'>Address: Malvar, Batangas, Philipppines</Typography>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61931.72784115935!2d121.10135442343079!3d14.033835221589664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6eda10ad44c7%3A0xdba612838bb657ee!2sMalvar%2C%20Batangas!5e0!3m2!1sen!2sph!4v1694309676446!5m2!1sen!2sph" width="370" height="280" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" title="a"></iframe>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
