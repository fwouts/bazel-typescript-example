import { sayHi } from "workspace/src/dep";
import HelloComponent from "workspace/src/react";

console.log(sayHi("World"));
console.log("TSX is compiled too!");
console.log(HelloComponent.toString());
