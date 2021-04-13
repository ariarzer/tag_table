import React from 'react';

import './Td.css';

export function Td(props) {
  let inner;
  if (Array.isArray(props.children)) {
    inner = props.children.map((item) => {
      return <button key={item} onClick={() => props.setTags(item)}>{item}</button>
    })
  } else {
    inner = String(props.children);
  }
  return <td className={'Td'}>{inner}</td>;
};
