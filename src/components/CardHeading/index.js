import React from "react";
import CardTitle from "../CardTitle";
import "./style.css";

function CardHeading(props) {
  return ( 
    <div>
      <CardTitle title={props.login}/>
    </div> 
  );
}

export default CardHeading;
