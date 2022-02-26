import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import StandardImageList from './components/imagelist'
import Annotate from './components/annotate';
import Grid from '@material-ui/core/Grid';
import TransformsMenu from './components/transformsMenu';
import DetectionsMenu from './components/detectionsMenu';
import { AppBar, Toolbar, Typography, Button, Link, Container } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import PrimaryAppBar from './components/appbar';
import PermanentDrawerLeft from './components/menuDrawer';
import Viewerpage from './pages/Viewerpage';
import Homepage from './pages/Homepage';
import Labpage from './pages/Labpage'
import Datapage from './pages/Datapage'
import { BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.imageselectionhandler = this.imageselectionhandler.bind(this)
    this.state = {
      image_name:'',}}
      imageselectionhandler = (value) => {
        this.setState({
          image_name: value
        })
      }
  render (){
  return (
    

        <Router>
          <div className="App">
            <Route exact path="//" component={() => <Homepage imagename={this.state.image_name}/>} /> 
            <Route exact path="/Viewer" component={() => <Viewerpage image_name={this.state.image_name} />} />
            <Route exact path="/Lab" component={() => <Labpage />} />
            <Route exact path="/Data" component={() => <Datapage image_name={this.state.image_name} imageselectionhandler={this.imageselectionhandler}/>} /> 
          </div>
          {console.log(this.state.image_name)}
        </Router>

  
    
  )
}}
export default App;
