
export default function() {
  return icd10Array.map(function(entry) {
    return {
      id: entry[0],
      value: entry[0] + ' - ' + entry[1]  // eslint-disable-line prefer-template
    };
  });
}