import OpenSeaDragon from "openseadragon";
import React, { useEffect, useState } from "react";
import * as Annotorious from '@recogito/annotorious-openseadragon';
//import '@recogito/annotoriousopenseadragon/dist/annotorious.min.css';
import '@recogito/annotorious/dist/annotorious.min.css';
const OpenSeaDragonViewer = ({ image }) => {
  const [viewer, setViewer] = useState( null);
  const [anno, setAnno] = useState(null)
  useEffect(() => {
    if (image && viewer) {
      viewer.open(image.source);
    }
  }, [image]);

  const InitOpenseadragon = () => {
    viewer && viewer.destroy();
    
    const initViewer = OpenSeaDragon({
        id: "openSeaDragon",
        prefixUrl: "openseadragon-images/",
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        maxZoomPixelRatio: 2,
        minZoomLevel: 1,
        visibilityRatio: 1,
        zoomPerScroll: 2,
        showNavigator:  true
      })
    setViewer(initViewer );
    const config = {};
    const annotate = Annotorious(initViewer, config);
    setAnno(annotate)
    annotate.setDrawingTool('polygon')
  };

  useEffect(() => {
    InitOpenseadragon();
    return () => {
        viewer && viewer.destroy();
    };
  }, []);

  return (
  <div 
  id="openSeaDragon" 
  style={{
    height: "800px",
    width: "1200px"
  }}
  >
  </div>
  );
};

export  { OpenSeaDragonViewer };