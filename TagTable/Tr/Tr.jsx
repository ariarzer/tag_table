import React from 'react';
import './Tr.css';

import Td from './Td';
import ColorExamples from "./ColorExamples";

export function Tr(props) {
  return <tr className={'Tr'}>
    <th className={'Td Td--th'}>{props.colorName}</th>
    <td><ColorExamples
      palette={props.palette}
      examples={props.examples}
      colorName={props.colorName}
    /></td>
    {Object.keys(props.fields).map(key => {
      return <Td
        key={`${props.colorName}_${key}`}
        setTags={props.setTags}
        selectedTags={props.selectedTags}
      >{props.fields[key]}</Td>
    })}
  </tr>;
};
