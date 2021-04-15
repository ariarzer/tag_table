import React from "react";

import './Th.css'

export function Th(props) {
  const className = props.min ? 'Th Th--min' : 'Th';
  return <th className={className}>{props.children}</th>
}
