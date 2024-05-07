export class Base {
    constructor(tag = 'div') {
        this.children = [];
        this.element = document.createElement(tag);
        this.cssStyle = {};
    }
    render() {
        this.style(
            {
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                justifyContent: "center",
                alignItems: "center",
            });
        this.children.map((x) => {
            this.element.appendChild(x.render());
        });
        if (this.content) {
            this.element.innerText = this.content;
        }
        this.applyStyle();
        return this.element;
    }
    append(component) {
        this.children.push(component);
    }
    style(style) {
        this.cssStyle = { ...style, ...this.cssStyle };
    }
    applyStyle() {
        for (let i in this.cssStyle) {
            this.element.style[i] = this.cssStyle[i];
        }
    }
}