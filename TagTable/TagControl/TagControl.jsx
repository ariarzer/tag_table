import React from "react";

import Tag from '../Tag';

export function TagControl(props) {
  props.allTagsList;
  return props.allTagsList.map((tag) => {
    return <Tag
      key={tag}
      setTags={props.setTags}
      selectedTags={props.selectedTags}
    >{tag}</Tag>
  });
}
