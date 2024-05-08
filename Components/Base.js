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
        if (this.content) {
            this.element.innerText = this.content;
        }
        this.applyStyle();
        return this.element;
    }
    append(component) {
        this.children.push(component);
        this.element.appendChild(component.render());
    }
    style(style) {
        this.cssStyle = { ...style, ...this.cssStyle };
    }
    applyStyle() {
        for (let i in this.cssStyle) {
            this.element.style[i] = this.cssStyle[i];
        }
    }
    update() {
        this.element.innerHTML = "";
        this.render();
    }
    clear() {
        this.element.innerHTML = "";
        return this;
    }
    removeChild(child) {
        this.element.removeChild(child.element);
        this.children.splice(this.children.indexOf(child), 1);
    }
}