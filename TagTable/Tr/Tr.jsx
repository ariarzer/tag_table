import React from 'react';
import './Tr.css';

import Td from './Td';

export function Tr(props) {
  return <tr className={'Tr'}>
    <th className={'Tr__th'}>{props.colorName}</th>
    {Object.keys(props.fields).map(key => {
      return <Td key={`${props.colorName}_${key}`}>{props.fields[key]}</Td>
    })}
  </tr>;
};
