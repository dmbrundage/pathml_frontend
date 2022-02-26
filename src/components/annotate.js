import React, { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import PermanentDrawerLeft from './menuDrawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '@recogito/annotorious/dist/annotorious.min.css';
import "../styles.css";
function Annotate(props) {

  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [ anno, setAnno ] = useState();

  // Current drawing tool name
  const [ tool, setTool ] = useState('polygon');

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current
      });

      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', annotation);
      });

      annotorious.on('updateAnnotation', (annotation, previous) => {
        console.log('updated', annotation, previous);
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);
    annotorious.setDrawingTool('polygon')
    //anno.SelectorPack();
    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  // Toggles current tool + button label

  return (
    <React.Fragment>
       <Grid
      
      direction="row"
      spacing = {1}
    >
    <div>

      <img 
        ref={imgEl} 
        src={`data:image/png;base64,${props.image}`}
        alt="Tile" 
        className="photo"
       />
        

    </div>
    <div>
      <Grid container justifyContent="center" space={3}> 

    </Grid>
    </div>
    </Grid>
    </React.Fragment>
  );
}

export default Annotate;