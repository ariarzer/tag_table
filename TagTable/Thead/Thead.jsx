import React from "react";

import './Thead.css';

import Th from '../Th/';
import TagControl from '../TagControl';

export function Thead(props) {

  return <thead className={'Thead'}>
    <tr className={'Tr'}>
      <TagControl
        setTags={props.setTags}
        selectedTags={props.selectedTags}
        allTagsList={props.allTagsList}
      />
    </tr>
    <tr className={'Tr'}>
      <Th/>
      {props.fields.map(item => <Th key={item}>{item}</Th>)}
    </tr>
  </thead>
}
