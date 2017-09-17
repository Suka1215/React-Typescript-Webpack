import * as React from "react";
import { render } from "react-dom";
import * as Rx from "rxjs";

const observer = Rx.Observable.of(1, 2, 3);

console.log(observer);

const App = () => <h1>Hello From React Typescript</h1>;

render(<App />, document.getElementById("root"));
