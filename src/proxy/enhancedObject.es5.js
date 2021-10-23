export function enhanceObject(obj, propsKeys) {
  const storedObj = Object.create(null);

  propsKeys.forEach((key) => {
    storedObj[key] = obj[key];

    Object.defineProperty(obj, key, {
      get: function () {
        console.log(`GETTING PROPERTY [${key}]`);
        return storedObj[key];
      },
      set: function (value) {
        console.log(`SETTING PROPERTY [${key}]`);
        storedObj[key] = value;
      }
    });
  });

  return obj;
}
