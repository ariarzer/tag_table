import React, {useState, useEffect} from "react";
import './TagTable.css';

import normalizeData, { collectDataFields, getAllTags } from '../lib/normalizeData';

import Thead from './Thead';
import Tr from './Tr';

export function TagTable(props) {
  const data = normalizeData(props.data);

  const urlSelectedTags = location.search
    .slice(1)
    .split("&")[0]
    .split("=")[1]
    .split(',');

  const [selectedTags, setSelectedTags] = useState(props.selectedTags || urlSelectedTags || []);

  const setTags = (tag) => {
    if (selectedTags.includes(tag)) {
      return;
    }
    setSelectedTags([...selectedTags, tag]);
  };
  useEffect(
    () => {
      window.history.pushState({selectedTags: selectedTags}, '', `?selectedTags=${selectedTags.join(',')}`);
    }, [selectedTags],
  );

  return <table className={'TagTable'}>
    <Thead
      fields={collectDataFields(data)}
      setTags={setTags}
      selectedTags={selectedTags}
      allTagsList={getAllTags(data)}
    />
    <tbody>
    {Object.keys(data).map((colorName) => {
      if (isRowContainAllTags(data[colorName], selectedTags)) {
        return <Tr
          key={colorName}
          colorName={colorName}
          fields={data[colorName]}
          setTags={setTags}
          selectedTags={selectedTags}
        />
      }
    })}
    </tbody>
  </table>;
}

function isRowContainAllTags(row, tags) {
  if (!row.tags || !tags) {
    return true;
  }
  return tags.reduce((acc, cur) => {
    return acc & row.tags.includes(cur);
  }, true)
}
