import React from "react";

import './Thead.css';

import Th from '../Th/';

export function Thead(props) {

  return <thead className={'Thead'}>
    <tr className={'Tr'}>
      <Th>color-name</Th>
      {props.fields.map(item => <Th key={item}>{item}</Th>)}
    </tr>
  </thead>
}
