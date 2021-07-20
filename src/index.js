import _ from "lodash";
import "./style.scss";
import { aPromise } from "./assets/js/index";

aPromise(function () {
    console.log("test");
}).then(fn => fn());

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "World"]);

    return element;
}

document.body.appendChild(component());
