import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { Link as RLink, Redirect } from "react-router-dom";
// react.school/material-ui

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

export default function ButtonAppBar() {
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        style={{ background: '#CF4520' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            PathView
          </Typography>
          <RLink to= "/Data" style={{ color: '#FFF' }}>
          <IconButton color="inherit" onClick={() => setExample("primary")}>
            Data
          </IconButton>
          </RLink>
          <RLink to= "/" style={{ color: '#FFF' }}>
          <IconButton color="inherit" onClick={() => setExample("default")}>
            Transform
          </IconButton></RLink>
          <RLink to= "/Viewer" style={{ color: '#FFF' }}>
          <IconButton color="inherit" onClick={() => setExample("primary")}>
            Viewer
          </IconButton>
          </RLink>
          <RLink to= "/Lab" style={{ color: '#FFF' }}>
          <IconButton color="inherit" onClick={() => setExample("primary")}>
            Lab
          </IconButton>
          </RLink>
        </Toolbar>
      </AppBar>
      <Toolbar />

    </React.Fragment>
  );
}