import { NavBar } from '../Components/NavBar.js';
import { Page } from '../Components/Page.js';
import { Card } from '../Components/Card.js';

export default class Home extends Page {
    constructor() {
        super('div');
    }
    prepare() {
        let navbar = new NavBar();
        navbar.addLinks(
            {
                "Logout": () => {
                    localStorage.clear();
                    this.getRouter().load_page("login");
                }
            }
        )
        this.append(navbar);

        let info_card = new Card();
        this.getDi().Request.get(this.getConfig().LINKS.get_user, { id: localStorage.getItem("token") }, (data) => {
            info_card.content = `
            Name: ${data.data.username}
            Email: ${data.data.email}
            `;
            info_card.update();
        })
        this.append(info_card);
    }
    render() {
        this.prepare();
        return super.render();
    }
}