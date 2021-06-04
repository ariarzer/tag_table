import normalizeData, { clearDataFor } from "../lib/normalizeData.js";

import fs from 'fs';

const data = JSON.parse(fs.readFileSync('data/data.json'));
const scheme = JSON.parse(fs.readFileSync('node_modules/@vkontakte/appearance/main.valette/scheme_web.json'));

const webColors = clearDataFor(normalizeData(scheme.vkcom_dark.colors), 'deprecated_for_web');

const lostColors = [];
const dataColors = Object.keys(data.colors);
Object.keys(webColors).forEach((colorName) => {
  if(!dataColors.includes(colorName)) {
    lostColors.push(colorName);
  }
});

if (!!lostColors.length) {
  throw new Error(`Colors ${lostColors.join(', ')} are lost in documentation`);
}
