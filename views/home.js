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
        navbar.addButton(`<object class='h-8' style="fill:blue;" data="assets/settings.svg"></object>`, 'Settings', () => {

        })
        let chat_card = new Card();
        chat_card.style({
            display: "block",
            flex: 1,
            overflowY: "auto",
            padding: '1rem',
            borderRadius: 'none',
            width: '100%',
        });
        let id = localStorage.getItem("token");
        this.getDi().Request.get(this.getConfig().LINKS.get_user_chats.replace("<id>", id), {}, (data) => {
            if (data.success) {
                for (let x of data.data) {
                    let chat_div = document.createElement("div");
                    chat_div.setAttribute('data-id', x._id.$oid);
                    chat_div.innerHTML = `
                    <div class='img px-5 aspect-square rounded-xl text-center align-bottom text-3xl uppercase'>
                    ${x.name[0]}
                    </div>
                    <p class='p-5 select-none'>${x.name}</p>`;
                    chat_div.className = 'z-chat-card my-3 flex items-center gap-2 justify-start w-full rounded-xl min-h-16 text-nowrap overflow-hidden backdrop-blur-md';
                    chat_card.element.appendChild(chat_div);
                }
            }
        });
        this.append(navbar);
        this.append(chat_card);
    }
    render() {
        this.prepare();
        return super.render();
    }
}