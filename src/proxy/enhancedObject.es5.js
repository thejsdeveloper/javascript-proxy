export function enhanceObject(plainObject) {
  const keys = Object.keys(plainObject);

  const storedObject = {};

  keys.forEach((key) => {
    storedObject[key] = plainObject[key];
    Object.defineProperty(plainObject, key, {
      get: function () {
        console.log(`GETTING value for  [${key}]`);
        return storedObject[key];
      },
      set: function (value) {
        console.log(`SETTING ${key} = ${value}`);
        storedObject[key] = value;
      }
    });
  });

  return plainObject;
}
