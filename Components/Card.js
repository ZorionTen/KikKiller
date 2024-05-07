import { Base } from './Base.js';
export class Card extends Base {
    constructor() {
        super('div');
    }
    render() {
        this.style({
            borderRadius: "1rem",
        });
        return super.render();
    }
    addChildren(x) {
        for (let i in x) {
            this.append(x);
        }
    }
}   