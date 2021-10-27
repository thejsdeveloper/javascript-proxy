export const proxyObject = function (obj) {
  return new Proxy(obj, {
    set: function (target, property, value, receiver) {
      console.log(`SETTING ${property} = ${value}`);
      return Reflect.set(target, property, value, receiver);
    },
    get: function (target, property, receiver) {
      console.log(`GETTING value for  [${property}]`);
      return Reflect.get(target, property, receiver);
    }
  });
};
