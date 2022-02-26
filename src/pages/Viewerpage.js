import React from "react";
import Viewer from "../components/viewer";
import ButtonAppBar from "../components/appbar";

class Viewerpage extends React.Component {

  render() {
    console.log(this.props.modelid)
    return (

      < div className="App" >
        <ButtonAppBar/>

        <Viewer image_name={this.props.image_name}/>
      </ div >
    );
  }
}

export default Viewerpage;