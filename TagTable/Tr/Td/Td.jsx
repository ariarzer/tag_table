import React from 'react';

import './Td.css';

import TagControl from '../../TagControl';

export function Td(props) {
  let inner;
  if (Array.isArray(props.children)) {
    inner = <TagControl
      allTagsList={props.children}
      setTags={props.setTags}
      selectedTags={props.selectedTags}
    />;
  } else {
    inner = String(props.children);
  }
  return <td className={'Td'}>{inner}</td>;
};
