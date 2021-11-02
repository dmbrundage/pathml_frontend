import React from "react";
import axios from "axios";
/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
 export default function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");
 
  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('filename', file.name);

    fetch('http://localhost:5000/upload_file', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        console.log(body.file)
      });
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