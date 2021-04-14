import ReactDOM from 'react-dom';
import React from "react";

import './base.css';

import TagTable from './TagTable';

import data from './data/data.json';

const elem = document.getElementById('root');

ReactDOM.render( <TagTable data={data.colors}/>, elem);
