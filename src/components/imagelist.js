import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import PermanentDrawerLeft from './menuDrawer';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

import {Button} from "@material-ui/core";
export default function StandardImageList(props) {
 const  handleClick = (value) => {
    console.log(value)
  }
  const itemData = props.tiles
  return (
    <React.Fragment>

    <ImageList  cols={10} rowHeight={'auto'} gap={10} >
      {itemData.map((item, index) => (
        <ImageListItem  >
           
          <img
            src={`data:image/png;base64,${item}`}
            alt={item.title}    
            loading="lazy"
           
          />
         <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              
              position="top"
              actionIcon={
               <Button onClick={() => props.selection(index)}>View</Button>
              }
              actionPosition="left"
            />
        </ImageListItem>
        
      ))}
    </ImageList>
    </React.Fragment>
  );
}

