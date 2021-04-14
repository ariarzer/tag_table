import React from 'react';

import './Td.css';

import Tag from '../../Tag';

export function Td(props) {
  let inner;
  if (Array.isArray(props.children)) {
    inner = props.children.map((item) => <Tag
      key={item}
      setTags={props.setTags}
      isSelect={props.selectedTags.includes(item)}
    >{item}</Tag>);
  } else {
    inner = String(props.children);
  }
  return <td className={'Td'}>{inner}</td>;
};
