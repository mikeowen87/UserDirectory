import React from "react";
import { Button } from "reactstrap";

import "./style.css";

const Btn = (props) => {
  return (
    <Button 
      onClick={props.onClick} 
      className={`${props["data-value"]}`}
      data-value={props["data-value"]}   
      oncolor="warning" 
      size="lg"
      >{props.btnName}
      </Button>
  );
}

export default Btn;