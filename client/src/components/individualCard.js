import React, { Component } from "react";

const styles = {
  cardStyle: {
    borderRadius: 0
  }
};

function Individualcard(props) {
  console.log(props)
  return (
    <tr className={"text-white table-" + props.color}>
      {/* <th scope="row"><i class="pl-2 fas fa-user" /></th> */}
      <td className="align-middle">{props.name}</td>
      <td className="align-middle">{props.math}</td>
      <td className="align-middle">{props.history}</td>
      <td className="align-middle">{props.science}</td>
      <td className="align-middle">{props.english}</td>
    </tr>
  )
}
  

export default Individualcard;
