import { NavBar } from './NavBar.js';

export class Footer extends NavBar {
    constructor() {
        super('div');
    }
    render() {
        this.style({
            borderRadius: "0rem",
            bottom: "0px",
            top: "",
            justifyContent: "center",
            fontSize: "1rem",
        });
        this.element.className = "footer";
        return super.render();
    }
    addChildren(x) {
        for (let i in x) {
            this.append(x);
        }
    }
}   