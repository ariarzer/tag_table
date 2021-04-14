import React, {useState, useEffect} from "react";
import './TagTable.css';

import normalizeData, { collectDataFields, getAllTags } from '../lib/normalizeData';

import Thead from './Thead';
import Tr from './Tr';
import TagControl from "./TagControl";

export function TagTable(props) {
  const data = normalizeData(props.data);

  const urlSelectedTags = new URLSearchParams(window.location.search)
    .get('selectedTags')
    ?.split(',');

  const [selectedTags, setSelectedTags] = useState(props.selectedTags || urlSelectedTags || []);

  const setTags = (tag) => {
    if (selectedTags.includes(tag)) {
      const newSelectedTags = [];
      selectedTags.forEach((item) => {
        if (tag !== item) {
          newSelectedTags.push(item);
        }
      });
      setSelectedTags(newSelectedTags);
      return;
    }
    setSelectedTags([...selectedTags, tag]);
  };
  useEffect(
    () => {
      if (!selectedTags || !selectedTags.length) {
        window.history.pushState({}, '', window.location.pathname);
        return;
      }
      window.history.pushState({selectedTags: selectedTags}, '', `?selectedTags=${selectedTags.join(',')}`);
    }, [selectedTags],
  );

  return <>
    <TagControl
      setTags={setTags}
      selectedTags={selectedTags}
      allTagsList={getAllTags(data)}
    />
    <table className={'TagTable'}>
      <Thead
        fields={collectDataFields(data)}
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
    </table>
  </>;
}

function isRowContainAllTags(row, tags) {
  if (!row.tags || !tags) {
    return true;
  }
  return tags.reduce((acc, cur) => {
    return acc & row.tags.includes(cur);
  }, true)
}
