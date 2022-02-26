import React from "react";
import ButtonAppBar from "../components/appbar";

class Labpage extends React.Component {

  render() {
    return (
        
        <body>
            <ButtonAppBar/>
        <iframe  frameborder='0'   src='http://localhost:8888/notebooks/Untitled.ipynb' width="100%" height="1000px"/>
     </body>
    );
  }
}

export default Labpage;