import YoutubeEmbed from "../components/video";
import React, { useEffect, useRef, useState } from 'react';
import {OpenSeaDragonViewer} from './openseadragon'
export default function Viewer(props) {
    const [images, setImages] = useState([]);
    const [manifest, setManifest] = useState();
  
  
    useEffect(() => {
      getImages();
    }, []);
  
    const getImages = async () => {
      const query_params={
        "case_id": props.image_name
    }
      const response = await fetch("http://localhost:8080/slide_viewer/",{
        method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(query_params)
      })
      let image = await response.json();
      console.log('image', image)
      setManifest(image.manifest)
    };
  
    const previewImage = async (slide) => {
      setManifest(slide.slide);
    };
  
  
    return (
         // <YoutubeEmbed embedId="tt4VInUMdXg" />
      <div 
       className="App"
       style={{
         display: "flex",
         justifyContent:'space-between'
         }}
      >
        
        <div>
          <h2>Loaded Image</h2>
          
              {images.map((group, index) => {
                  console.log(images)
                return (
                  <div 
                  style={{
                    display:"flex",
                    flexDirection:'column'
                    }}
                  >
                          
                    {group.slides.map((slide, index) => {
                        if (slide.name=='CMU-1-Small-Region'){
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            return previewImage(slide);
                          }}
                        >
                          {slide.name}
                        </button>
                      );}
                    })}
                  </div>
                );
              })}
        </div>
        <div>
        <OpenSeaDragonViewer image={manifest} />
        </div>
      </div>
    );
  }
  