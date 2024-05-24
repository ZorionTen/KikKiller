import { Base } from './Base.js';
export class Card extends Base {
    constructor() {
        super('div');
    }
    render() {
        this.style({
            borderRadius: "1rem",
            overflow: "hidden",
        });
        return super.render();
    }
    addChildren(x) {
        for (let i of x) {
            this.append(i);
        }
    }
}   