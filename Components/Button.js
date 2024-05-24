import { Base } from './Base.js';
export class Button extends Base {
    constructor(text = "Button", callback = (e) => { console.log(e.target.innerHTML + " clicked"); }) {
        super('button');
        this.text = text;
        this.callback = callback;
    }
    render() {
        this.style({
            display: 'inline-block',
            borderRadius: "1rem",
            overflow: "hidden",
            padding: "0.3rem 1rem",
        });
        this.element.innerHTML = this.text;
        this.element.addEventListener('click', (e) => this.callback(e));
        return super.render();
    }
}   