import { enhanceObject } from "./proxy/enhancedObject.es5";
import { proxyObject } from "./proxy/enhancedObject.es6";
import "./styles.css";

document.getElementById("app").innerHTML = `
<header class="container" id="header">
<img src=${require("./assets/js_j_logo.png")} class="logo"/>
<p class="title">Proxy</p>
</header>

<div class="container column">
<section class="description mt-2">
<h3 >Implementations</h3>
    <hr/>
<ul class="list">
 <li>ES6 Solution:  <strong>proxy/enhancedObject.es6.js</strong></li>
 <li>ES5 Solution:  <strong>proxy/enhancedObject.es5.js</strong></li>
</ul>

</section>
<section class="note">
 <h2>To view the logs, please Open Console in the browser.</h2>
</section>
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
