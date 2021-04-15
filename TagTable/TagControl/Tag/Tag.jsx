import React from 'react';

import './Tag.css'

export function Tag(props) {
  let buttonClassName;
  const tag = props.children;
  if (props.isSelect) {
    buttonClassName = 'Tag Tag--selected'
  } else {
    buttonClassName = 'Tag'
  }
  return <button
    onClick={() => props.setTags(tag)}
    className={buttonClassName}
  >
    {tag}
  </button>;
}
