import { Card } from './Card.js';
export class Form extends Card {
    constructor(url, method, fields = [], onsubmit = (data) => { console.log(data); },header = false) {
        super('div');
        this.url = url;
        this.method = method;
        this.fields = fields;
        this.callback = onsubmit;
        this.inputElements = {};
        this.header = header;
    }
    createInput(data) {
        let style = `
            font-size: 1rem;
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            outline: none;
            border: none;
        `;
        this.inputElements[data.name] = document.createElement("input");
        this.inputElements[data.name].style = style;
        this.inputElements[data.name].type = data.type;
        this.inputElements[data.name].name = data.name;
        this.inputElements[data.name].placeholder = data.placeholder;
        this.inputElements[data.name].required = true;
        return this.inputElements[data.name];
    }
    render() {
        this.element.classList.add("form");
        this.style({
            flexDirection: "column",
            alignItems: "",
            backdropFilter: "blur(5px)",
            border: "1px solid var(--bg-dark)",
        });
        if (this.header) {
            this.element.innerHTML += this.header;
        }
        for (let i of this.fields) {
            this.element.appendChild(this.createInput(i));
        };
        let button_style = `
            font-size: 1rem;
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            border: none;
            margin-top: 1rem;
            outline: none;
        `;
        let button = document.createElement("button");
        button.style = button_style;
        button.type = "submit";
        button.innerText = "Submit";
        button.onclick = () => {
            let data = {};
            for (let i in this.inputElements) {
                data[i] = this.getValue(this.inputElements[i]);
            }
            this.callback(data);
        }
        this.element.appendChild(button);
        return super.render();
    }
    addChildren(x) {
        for (let i in x) {
            this.append(x);
        }
    }
    getValue(input){
        let val = input.value;
        if(input.required && val == ""){
            this.triggerRequiredError(input);
            return false;
        }
        return val;
    }
    triggerRequiredError(input){
        input.style.outline = "1px solid red";
        setTimeout(()=>input.style.outline = "none", 500);
        return false;
    }
}   