export default function getColorsForExample(palette, schemes, colorName) {
  const result = {};
  Object.keys(schemes).forEach((schemeName) => {
    const color = schemes[schemeName].colors[colorName];
    if (!color) {
      return;
    }
    const bgColorIdentifier = schemes[schemeName].colors['background_page']['color_identifier'];
    result[schemeName] = {
      color: palette[color['color_identifier']],
      bg:  palette[bgColorIdentifier],
    };
  });
  return result;
}
