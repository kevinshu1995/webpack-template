import _ from "lodash";
import "./style.scss";

function component() {
    const element = document.createElement("div");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "World"]);

    return element;
}

document.body.appendChild(component());
