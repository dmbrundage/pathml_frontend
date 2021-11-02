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
class App extends Component {
  componentDidMount() {
    fetch('http://localhost:5000/run_code/', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.code_params)
      }).then(response => response.json())
      .then(response => {
      this.handler(response['image'])
      this.tilehandler(response['tiles'])
      this.processedtilehandler(response['processed_tiles'])
      console.log(response)
  })}

  constructor(props) {
    super(props);
    this.staintypehandler = this.staintypehandler.bind(this)
    this.stainmethodhandler = this.stainmethodhandler.bind(this)
    this.blurvaluehandler = this.blurvaluehandler.bind(this)
    this.blurtypehandler = this.blurtypehandler.bind(this)
    this.handler = this.handler.bind(this)
    this.tilehandler = this.tilehandler.bind(this)
    this.processedtilehandler = this.processedtilehandler.bind(this)
    this.blurhandler = this.blurhandler.bind(this)
    this.pixelhandler = this.pixelhandler.bind(this)
    this.stainhandler = this.stainhandler.bind(this)
    this.selecttile = this.selecttile.bind(this)
    this.regionsizehandler = this.regionsizehandler.bind(this)
    this.iterationshandler = this.iterationshandler.bind(this)

    this.state = {
      region_size:0,
      iterations:0,
      stain_type:'None',
      stain_method:'none',
      blur_value:0,
      blur_type:'none',
      tile: 0,
      image: "",
      blur_param:false,
      pixel_param:false,
      stain_param:false,
      menu_params:{
        'Blur': false,
        'Superpixel Interpolation': true,
        'Stain Normalization': true
    },
    code_params:{
      "blur_value": 0,
      "blue_type": 0,
      "stain_type": "None",
      "stain_method":"None",
      'iterations':0,
      'region_size':0
  },
    tiles:[],
    processed_tiles:[]
    };
    }
    selecttile = (value) => {
      this.setState({
        tile: value
      })
    }
    handler = (value) => {
      this.setState({
        image: value
      })
    }

   tilehandler = (value) => {
      this.setState({
        tiles: value
      })
    }

    blurhandler = (value) => {
      this.setState({
        blur_param: value
      })
    }
    pixelhandler = (value) => {
      this.setState({
        pixel_param: value
      })
    }
    stainhandler = (value) => {
      this.setState({
        stain_param: value
      })
    }
    processedtilehandler = (value) => {
      this.setState({
        processed_tiles: value
      })
    }
    blurvaluehandler = (value) => {
      this.setState({
        blur_value: value
      })
      
    }
    blurtypehandler = (value) => {
      this.setState({
        blur_type: value
      })
      
      
    }

    staintypehandler = (value) => {
      this.setState({
        stain_type: value
      })
      
    }
    stainmethodhandler = (value) => {
      this.setState({
        stain_method: value
      })
      
      
    }
    regionsizehandler = (value) => {
      this.setState({
        region_size: value
      })
      
    }
    iterationshandler = (value) => {
      this.setState({
        iterations: value
      })
      
      
    }
  render (){
  return (
    <React.Fragment>
      
   <PermanentDrawerLeft menu_params={this.state.menu_params} blurhandler={this.blurhandler} pixelhandler={this.pixelhandler} stainhandler={this.stainhandler} 
   blurtype={this.state.blur_type} blurvalue={this.state.blur_value} stainmethod={this.state.stain_method} staintype={this.state.stain_type} code_params={this.state.code_params}
   processedtilehandler = {this.processedtilehandler} regionsize={this.state.region_size} iterations={this.state.iterations} />
<Container>

<Box my={2}>

      
<Grid item xs={4}>
      
      </Grid>
  
     <Grid
      container
      justifyContent="center"
      columns ={15}
      spacing={5}
    >
      <Grid item xs={3}>
   <TransformsMenu menu_params={this.state.menu_params} blur={this.state.blur_param} pixel={this.state.pixel_param} stain={this.state.stain_param} 
   blurvalue={this.state.blur_value} blurtype={this.state.blur_type} blurvaluehandler={this.blurvaluehandler} blurtypehandler={this.blurtypehandler}
   stainmethod={this.state.stain_method} staintype={this.state.stain_type} stainmethodhandler={this.stainmethodhandler} staintypehandler={this.staintypehandler}
   regionsize={this.state.region_size} iterations={this.state.iterations} regionsizehandler={this.regionsizehandler} iterationshandler={this.iterationshandler}/>
   </Grid>
      <Grid item xs={6}>
      <Annotate image={this.state.tiles[this.state.tile]} />
      </Grid>
      <Grid item xs={6}>
      <Annotate image={this.state.processed_tiles[this.state.tile]} />
      </Grid>
   
      </Grid>

      <StandardImageList tiles={this.state.tiles} selection={this.selecttile}/>
      </Box>
      </Container>
    </React.Fragment>
  )
}}
export default App;
