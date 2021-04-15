import React, {useState, useEffect} from "react";
import './TagTable.css';

import normalizeData, { collectDataFields, getAllTags, clearDataFor } from './lib/normalizeData';
import getColorsForExample from './lib/getColorsForExample';

import Thead from './Thead';
import Tr from './Tr';
import TagControl from "./TagControl";

export function TagTable(props) {
  const data = clearDataFor(normalizeData(props.data), 'deprecated_for_web');

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
            examples={getColorsForExample(props.palette, props.schemes, colorName)}
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
