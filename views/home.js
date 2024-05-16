import { ActionBar } from '../Components/ActionBar.js';
import { Page } from '../Components/Page.js';
import { Card } from '../Components/Card.js';

export default class Home extends Page {
    constructor() {
        super('div');
    }
    prepare() {
        let navbar = new ActionBar();
        navbar.addTab(`<object class='w-64' style="fill:blue;" data="assets/name_logo.svg"></object>`);
        navbar.addButton('X');
        this.append(navbar);
        let info_card = new Card();
        info_card.style({
            flexDirection: "column",
            flex: 1,
            overflowY: "scroll",
            height: "fit-content",
            padding: '0px',
        });
        let id = localStorage.getItem("token");
        this.getDi().Request.get(this.getConfig().LINKS.get_user_chats.replace("<id>", id), {}, (data) => {
            if (data.success) {
                for (let x of data.data) {
                    let chat_div = document.createElement("div");
                    chat_div.setAttribute('data-id', x._id.$oid);
                    chat_div.innerHTML = `
                    <div class='img px-5 aspect-square rounded-full text-center align-bottom text-3xl uppercase'>
                    ${x.name[0]}
                    </div>
                    <p class='p-5 select-none'>${x.name}</p>`;
                    chat_div.className = 'z-chat-card flex items-center gap-2 justify-start w-full rounded-full text-nowrap overflow-hidden backdrop-blur-sm';
                    info_card.element.appendChild(chat_div);
                }
            }
        })
        this.append(info_card);
    }
    render() {
        this.prepare();
        return super.render();
    }
}