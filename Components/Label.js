import { Base } from './Base.js';
export class Label extends Base {
    constructor(text = "Button") {
        super('span');
        this.text = text;
    }
    render() {
        this.style({
            display: 'inline-block',
            borderRadius: "0px",
            overflow: "hidden",
            padding: "0px",
        });
        this.element.innerHTML = this.text;
        return super.render();
    }
}   