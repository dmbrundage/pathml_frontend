
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TissueDetection from "./tissueDetection";
import PermanentDrawerLeft from './menuDrawer';
export default function DetectionsMenu(props) {


  return (
    
<React.Fragment>

    <Grid
      
      direction="row"
      spacing = {1}
    >
        <TissueDetection />

    </Grid>
    
    </React.Fragment>
  );
}


