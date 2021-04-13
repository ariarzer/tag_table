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
    {Object.keys(data).map((colorName) => <Tr key={colorName} colorName={colorName} fields={data[colorName]}/>)}
    </tbody>
  </table>;
}
