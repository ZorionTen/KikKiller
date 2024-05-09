import { Base } from './Base.js';
export class GridContainer extends Base {
    constructor(columns = 5, rows = 'auto') {
        super('div');
        this.columns = columns;
        this.rows = rows;
        this.gap = 2;
    }
    render() {
        let style = {
            display: "grid",
        };
        if (Number.isInteger(this.columns)) {
            style.gridTemplateColumns = `repeat(${this.columns}, auto)`;
        } else {
            style.gridTemplateColumns = `auto`;
        }
        if (this.rows !== 'auto') {
            style.gridTemplateRows = `repeat(${this.rows}, auto)`;
        } else {
            style.gridTemplateRows = `auto`;
        }
        this.style(style);

        return super.render();
    }
    addChildren(x) {
        for (let i in x) {
            this.append(i);
        }
    }
}   