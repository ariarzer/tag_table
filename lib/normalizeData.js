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

export function clearDataFor(data, curField) {
  const result = {};

  const fieldList = collectDataFields(data);

  Object.keys(data).forEach((key) => {
    if (data[key][curField]) {
      return;
    }
    result[key] = {};

    fieldList.forEach((field) => {
      if (field !== curField) {
        result[key][field] = data[key][field];
      }
    });
  });
  return result;
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

export function getAllTags(data) {
  const result = new Set();
  Object.keys(data).forEach((colorName) => {
    data[colorName].tags.forEach((tag) => result.add(tag));
  });
  return [...result];
}
