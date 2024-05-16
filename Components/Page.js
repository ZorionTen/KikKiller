import { Base } from './Base.js';
export class Page extends Base {
    constructor() {
        super('div');
        this.element.classList.add("page");
    }
    render() {
        let toast_area = document.createElement("div");
        toast_area.id = "toast_area";
        let styles = {
            position: "fixed",
            bottom: "2rem",
            width: "100%",
            zIndex: "1000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        };
        Object.entries(styles).map(([k, v]) => toast_area.style[k] = v);
        document.body.appendChild(toast_area);
        this.style(
            {
                width: "100%",
                height: "100%",
                flexDirection: "column",
                padding: "0rem",
                margin: "0px",
            });
        return super.render();
    }
}