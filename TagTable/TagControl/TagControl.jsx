import React from "react";

import Tag from '../Tag';

export function TagControl(props) {
  const tagsElemList = props.allTagsList.map((tag) => {
    return <li key={tag}>
      <Tag
        setTags={props.setTags}
        isSelect={props.selectedTags.includes(tag)}
      >
        {tag}
      </Tag>
    </li>
  });
  return <ul>{tagsElemList}</ul>
}
