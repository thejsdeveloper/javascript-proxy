import { enhanceObject } from "./proxy/enhancedObject.es5";
import { proxyObject } from "./proxy/enhancedObject.es6";
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let obj = { name: "rick", planet: "earth" };

obj = enhanceObject(obj);

console.clear();
console.log("************ ES5 Solution ************");
console.log(obj.name);
obj.planet = "Mars";

let character = { name: "morty", planet: "earth" };

character = proxyObject(character);

console.log("************ ES6 Solution ************");

console.log(character.name);
character.planet = "Mars";

character.grandParent = "Rick";
