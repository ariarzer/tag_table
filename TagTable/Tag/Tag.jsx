import React from 'react';

import './Tag.css'

export function Tag(props) {
  let buttonClassName;
  const tag = props.children;
  if (props.selectedTags.includes(tag)) {
    buttonClassName = 'Tag__selected'
  }
  return <button
    onClick={() => props.setTags(tag)}
    className={buttonClassName}
  >
    {tag}
  </button>;
}
