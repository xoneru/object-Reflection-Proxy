export default function orderByProps(obj, sortProp) {
    const arr = [];
    const sortArr = [];
  
    sortProp.forEach((prop) => {
      sortArr.push({ key: prop, value: obj[prop] });
    });
  /* eslint-disable */
    for (const prop in obj) {
       /* eslint-enable */
      if (!sortProp.includes(prop)) {
        arr.push({ key: prop, value: obj[prop] });
      }
    }
    arr.sort((a, b) => ((a.key > b.key) ? 1 : -1));
  
    return sortArr.concat(arr);
  }