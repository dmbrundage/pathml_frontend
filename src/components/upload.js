import React from "react";
import axios from "axios";
/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
 export default function FileUpload(props) {
  // State to store uploaded file
  const [file, setFile] = React.useState("");
console.log(props.imagename)
  // Handles file upload event and updates state
  function handleUpload(event) {
 
    setFile(event.target.files[0]);
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('filename', file.name);
    const code_params={
        "blur_value": 0,
        "blue_type": 0,
        "stain_type": "None",
        "stain_method":"None",
        'iterations':0,
        'region_size':0,
        'file_name':event.target.files[0].name
    }
    props.filenamehandler(event.target.files[0].name)
    fetch('http://localhost:8080/upload_file/', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        fetch('http://localhost:8080/run_code/', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(code_params)
      }).then(response => response.json())
      .then(response => {
      console.log(response)
      props.processedtilehandler(response['processed_tiles'])
      props.tilehandler(response['tiles'])
  })}
      );
    });
    }
    
  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
    </div>
    
  );
}