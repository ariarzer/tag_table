import React from "react";

import './TagControl.css';

import Tag from '../Tag';

export function TagControl(props) {
  const tagsElemList = props.allTagsList.map((tag) => {
    return <li key={tag} className={'TagControl__elem'}>
      <Tag
        setTags={props.setTags}
        isSelect={props.selectedTags.includes(tag)}
      >
        {tag}
      </Tag>
    </li>
  });
  return <ul className={'TagControl'}>{tagsElemList}</ul>
}
