import { Base } from './Base.js';
export class ActionBar extends Base {
    constructor() {
        super('div');
        this.tabs = document.createElement("div");
        this.tabs.className = 'z-tab rounded-tr-3xl rounded-tl-3xl flex-1 overflow-hidden';
        this.element.appendChild(this.tabs);

        this.alt_tabs = document.createElement("div");
        this.alt_tabs.className = 'z-button rounded-bl-3xl overflow-hidden';
        this.element.appendChild(this.alt_tabs);
    }
    render() {
        this.element.className = "action-bar";
        let style = {
            width: "100%",
            padding: "0px",
            paddingTop: '0.5rem',
            justifyContent: "end",
            gap: "0px"
        };
        this.style(style);
        return super.render();
    }
    addTab(text, callback = () => { }) {
        let tab = document.createElement("div");
        tab.className = 'px-5 py-3';
        tab.innerHTML = text;
        this.tabs.appendChild(tab);
    }
    addButton(text, callback = () => { }) {
        let tab = document.createElement("div");
        tab.className = 'px-1 py-1';
        tab.innerHTML = text;
        this.alt_tabs.appendChild(tab);
    }
    addLinks(x) {
        for (let i in x) {
            let action = document.createElement("span");
            action.className = "action"
            action.innerHTML = i;
            action.onclick = x[i];
            this.element.appendChild(action);
        }
    }

}   