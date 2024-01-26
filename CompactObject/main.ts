// Given an object or array obj, return a compact object.
// A compact object is the same as the original object, except with keys containing falsy values removed. 
//This operation applies to the object and any nested objects. 
//Arrays are considered objects where the indices are keys. 
//A value is considered falsy when Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.


function compactObject(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(compactObject).filter(Boolean);
    }
  
    if (typeof obj === 'object' && obj !== null) {
      const compactedObj: { [key: string]: any } = {};
  
      for (const key in obj) {
        const compactedValue = compactObject(obj[key]);
  
        if (Boolean(compactedValue) || Array.isArray(compactedValue)) {
          compactedObj[key] = compactedValue;
        }
      }
  
      return compactedObj;
    }
  
    return obj;
  }
  
  const example: any[] = [null, 0, 5, [0], [false, 16]];
  console.log(compactObject(example)); // [5, [], [ 16 ]]
  