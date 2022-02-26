import React from "react";
import ButtonAppBar from "../components/appbar";
import EnhancedTable from "../components/datatable"
import Footer from "../components/footer";
class Datapage extends React.Component {
  render() {

    
    return (

      < div className="App" >
        <ButtonAppBar/>
        <EnhancedTable image_name={this.props.image_name} imageselectionhandler={this.props.imageselectionhandler}/>
        <Footer />
        
      </ div >
    );
  }
}

export default Datapage;