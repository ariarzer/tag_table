import ReactDOM from 'react-dom';
import React from "react";

import palette from '@vkontakte/appearance/main.valette/palette_web';
import schemes from '@vkontakte/appearance/main.valette/scheme_web';

import './base.css';

import TagTable from './TagTable';
import resolvePalette from './utils/colorUtils';

import data from './data/data.json';

const elem = document.getElementById('root');

ReactDOM.render( <TagTable
  data={data.colors}
  palette={resolvePalette(palette)}
  schemes={schemes}
/>, elem);
