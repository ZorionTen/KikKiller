import { Base } from './Base.js';
export class Page extends Base {
    constructor() {
        super('div');
    }
    render() {
        this.style(
            {
                width: "100%",
                height: "100%"
            });
        return super.render();
    }
}