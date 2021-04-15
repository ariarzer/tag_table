export default function resolvePalette(palette) {
  const result = {};
  Object.keys(palette).forEach((key) => {
    result[key] = resolveColor(palette[key]);
  });
  return result;
}


function resolveColor(color) {
  if (color.indexOf('#') === 0 && color.length === 9) { // ahex
    return ahex2rgba(color.replace('#', ''));
  }
  return color;
}

 function ahex2fullAhex(ahex) {
  if (ahex.length === 8) {
    return ahex;
  } else {
    return `ff${ahex}`;
  }
}

function ahex2rgba(ahex, multiplier = 1) {
  const fullAhex = ahex2fullAhex(ahex);
  const opacity = parseInt(fullAhex.slice(0, 2), 16) / 255 * multiplier;
  const colorHex = fullAhex.slice(2);
  return hexAndOpacity2rgba(colorHex, opacity);
}

function hexAndOpacity2rgba(hex, opacity) {
  const colorArr = hexAndOpacity2rgbaArr(hex, opacity);
  return `rgba(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}, ${colorArr[3]})`;
}

function hexAndOpacity2rgbaArr(hex, opacity) {
  opacity = opacity.toFixed(2);
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4), 16),
    opacity,
  ];
}
