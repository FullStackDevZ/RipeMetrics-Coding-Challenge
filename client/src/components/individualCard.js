import React, { Component } from "react";

const styles = {
  cardStyle: {
    borderRadius: 0
  }
};

function Individualcard(props) {
  console.log(props)
  return (
    <tr className={"text-black table-primary"}>

      <td className="align-middle">{props.name}</td>
      <td className="align-middle">{props.math}</td>
      <td className="align-middle">{props.history}</td>
      <td className="align-middle">{props.science}</td>
      <td className="align-middle">{props.english}</td>
      <td className="align-middle">{props.gpa}</td>
      
     
    </tr>
    
  )
}
  

export default Individualcard;
