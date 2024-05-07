import { Base } from './Base.js';
export class NavBar extends Base {
    constructor() {
        super('nav');
    }
    render() {
        let style = {
            position: "fixed",
            top: "0px",
            right: "0px",
            width: "100%",
            height: "auto",
            justifyContent: "end",
        };
        this.style(style);
        return super.render();
    }
    addLinks(x) {
        for (let i in x) {
            this.element.innerHTML+=`<a style='text-decoration:none; color: inherit;' href="${x[i]}">${i}</a>`;
        }
    }
}   