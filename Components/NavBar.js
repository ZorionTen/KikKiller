import { Base } from './Base.js';
export class NavBar extends Base {
    constructor(links = false) {
        super('nav');
        if (links)
            this.addLinks(links);
    }
    render() {
        let style = {
            position: "fixed",
            top: "0px",
            right: "0px",
            width: "100%",
            height: "3rem",
            justifyContent: "end",
        };
        this.style(style);
        return super.render();
    }
    /**
     * 
     * @param {object} x {link_text: callback_function()}} 
     */
    addLinks(x) {
        for (let i in x) {
            let action = document.createElement("span");
            action.className = "action"
            action.innerHTML = i;
            action.onclick = x[i];
            this.element.appendChild(action);
        }
    }

}   