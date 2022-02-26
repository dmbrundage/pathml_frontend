import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CustomizedSwitches from './onOffSlider';
import Button from '@material-ui/core/Button';
import FileUpload from './upload';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: {
    padding: 18,
    minHeight: 64,
  },
  content: {
    flexGrow: 1,
    padding: 1,
  },
}));



export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  const runCode = () => {
    console.log(props.iterations,props.regionsize )
    fetch('http://localhost:8080/run_code/', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(code)
          }).then(response => response.json())
          .then(response => {
          console.log(response)
          props.processedtilehandler(response['processed_tiles'])
          props.tilehandler(response['tiles'])
      })
    }
    const code = {
      'blur_value': props.blurvalue,
      'blur_type': props.blurtype,
      'stain_type': props.staintype,
      'stain_method': props.stainmethod,
      'iterations':props.iterations,
      'region_size':props.regionsize,
      'file_name':props.imagename+'.svs'

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
    
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <FileUpload processedtilehandler = {props.processedtilehandler} tilehandler = {props.tilehandler} filenamehandler = {props.filenamehandler} imagename={props.imagename}/>
        <Divider />
        <List>
          {['Blur', 'Superpixel Interpolation', 'Stain Normalization'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
              <CustomizedSwitches text={text} switch_state={props.menu_params[text]} blurhandler={props.blurhandler} pixelhandler={props.pixelhandler} stainhandler={props.stainhandler}/>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Button variant="contained"  onClick={() => runCode()} style={{ background: '#CF4520' }}>Process</Button>
      </Drawer>

    </div>
  );
}