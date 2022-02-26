import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { Link as RLink, Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: 2
    },
    title: {
      flexGrow: 1
    },
    customColor: {
      // or hex code, this is normal CSS background-color
      backgroundColor: '#CF4520'
    },
    customHeight: {
      minHeight: 200
    },
  
  }));
export default function Footer() {
    return (
        <AppBar position="static" color="primary" style={{ background: '#CF4520' }}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
               
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}