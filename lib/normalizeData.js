export default function normalizeData(data) {
  const fieldList = collectDataFields(data);
  Object.keys(data).forEach((key) => {
    fieldList.forEach((field) => {
      if (data[key][field] === undefined) {
        data[key][field] = '';
      }
    })

  });
  return data;
}

export function collectDataFields(data) {
  const result = new Set();
  Object.values(data).forEach((item) => {
    Object.keys(item).forEach((i) => {
      result.add(i);
    })
  });
  return [...result];
}
