import React from "react";
import './TagTable.css';

import normalizeData, { collectDataFields} from '../lib/normalizeData';

import Thead from './Thead';
import Tr from './Tr';

export function TagTable(props) {
  const data = normalizeData(props.data);

  return <table className={'TagTable'}>
    <Thead fields={collectDataFields(data)}/>
    <tbody>
    {Object.keys(data).map((colorName) => {
      if (isRowContainAllTags(data[colorName], props.selectedTags)) {
        return <Tr key={colorName} colorName={colorName} fields={data[colorName]}/>
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
