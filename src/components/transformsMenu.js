import BlurTransform from "./blurTransform";
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import SuperpixelTransform from "./superpixelTransform";
import StainNormalizationTransform from "./stainNormalizationTransform";
import PermanentDrawerLeft from './menuDrawer';
export default function TransformsMenu(props) {
  const isLoggedIn = false;


   

  return (
    
<React.Fragment>

    <Grid
      
      direction="row"
      spacing = {1}
    >
         {props.blur
        ? <BlurTransform blurvalue={props.blurvalue} blurtype={props.blurtype} blurvaluehandler={props.blurvaluehandler} blurtypehandler={props.blurtypehandler}/>
        : console.log('this')
      }
           {props.pixel
        ? <SuperpixelTransform />
        : console.log('this')
      }
         {props.stain
        ? <StainNormalizationTransform stainmethod={props.stainmethod} staintype={props.staintype} stainmethodhandler={props.stainmethodhandler} staintypehandler={props.staintypehandler}/>
        : console.log('this')
      }
        
    </Grid>
    
    </React.Fragment>
  );
}



