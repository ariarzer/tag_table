import React from 'react';

import './ColorExamples.css';

export function ColorExamples(props) {
  const exampleElems = [];
  Object.keys(props.examples).forEach((schemeName) => {
    exampleElems.push(<li
      className={'ColorExamples__elem'}
      title={schemeName}
      style={{'--bg-color': props.examples[schemeName].bg, '--color': props.examples[schemeName].color}}
      key={`${props.colorName}_in_${schemeName}`}
    />)
  });
  return <ul className={'ColorExamples'}>{exampleElems}</ul>
}
