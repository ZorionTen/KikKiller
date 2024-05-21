import { Page } from '../Components/Page.js';
import { Form } from '../Components/Form.js';
import { Footer } from '../Components/Footer.js';

export default class Login extends Page {
    constructor() {
        super('div');
    }
    prepare() {
        let form_data = [
            {
                type: "email",
                name: "email",
                placeholder: "Email",
                required: true
            },
            {
                type: "password",
                name: "password",
                placeholder: "Password",
                required: true
            }
        ];
        let url = this.getConfig().LINKS.login;
        let form_header = `<div class="flex justify-center"><img src="assets/logo.png" alt="logo" height="100" width="100"/></div>`;
        let login_form = new Form(url, "Login", "POST", form_data, (data) => this.doLogin(data), form_header);
        let footer = new Footer();
        footer.addLinks(
            {
                "Register": () => {
                    this.getRouter().load_page("register");
                }
            }
        )
        this.append(login_form);
        this.append(footer);
    }
    render() {
        this.prepare();
        this.style({
            backgroundImage: "url('assets/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
        })
        return super.render();
    }
    doLogin(data) {
        let url = this.getConfig().LINKS.login;
        this.getDi().Request.post(url, data, (data) => {
            if (data.success) {
                localStorage.setItem("token", data.data.id);
                this.getRouter().load_page("home");
            }
        });
    }
}