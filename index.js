function myEach(collection, callback) {
  for (const element in collection) {
    callback(collection[element]);
  }
  return collection;
}
function myMap(collection, callback) {
  const newArray = [];
  for (const element in collection) {
    newArray.push(callback(collection[element]));
  }
  return newArray;
}

function myReduce(collection, callback, acc = undefined) {
  let result = acc !== undefined ? acc : 0;
  if (acc == undefined) {
    if (collection instanceof Array) {
      result = collection[0];
      const newArray = [...collection];
      newArray.shift();
      for (const element in newArray) {
        result = callback(result, newArray[element], collection);
      }
    } else if (collection instanceof Object) {
      const firstKey = Object.keys(collection)[0];
      result = collection[firstKey];
      const newObj = Object.assign({}, collection);
      delete newObj[firstKey];
      for (const element in newObj) {
        result = callback(result, newObj[element], collection);
      }
    }
  } else {
    for (const element in collection) {
      result = callback(result, collection[element], collection);
    }
  }
  return result;
}

function myFind(collection, predicate) {
  for (const element in collection) {
    if (predicate(collection[element])) {
      return collection[element];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let filtredCollection = [];
  for (const element in collection) {
    if (predicate(collection[element])) {
      filtredCollection.push(collection[element]);
    }
  }
  return filtredCollection;
}

function mySize(collection) {
  const size = [];
  for (const element in collection) {
    size.push(element);
  }
  return size.length;
}

function myFirst(array, n = 0) {
  const newArray = [];
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else return array[n];
}

function myLast(array, n = undefined) {
  const lastIndex = array.length - 1;
  const newArray = [];
  if (n) {
    for (let i = 0; i < n; i++) {
      newArray.push(array[array.length - n + i]);
    }
    return newArray;
  }
  return array[lastIndex];
}

function myKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  const keys = [];
  for (const value in object) {
    keys.push(object[value]);
  }
  return keys;
}
