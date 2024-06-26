import Login from './login.js';
import { Form } from '../Components/Form.js';
import { Footer } from '../Components/Footer.js';

export default class Register extends Login {
    constructor() {
        super('div');
    }
    prepare() {
        let form_data = [
            {
                type: "text",
                name: "email",
                placeholder: "Email",
                required: true
            },
            {
                type: "text",
                name: "username",
                placeholder: "Username",
                required: true
            },
            {
                type: "password",
                name: "password",
                placeholder: "Password",
                required: true
            },
            {
                type: "password",
                name: "confirm_password",
                placeholder: "Confirm password",
                required: true
            }
        ];
        let url = this.getConfig().LINKS.login;
        let form_header = `<div class='flex justify-center'><img src="assets/logo.png" alt="logo" height="100" width="100"/></div>`;
        let login_form = new Form(url, "Sign Up", "POST", form_data, (data) => this.doRegister(data), form_header);
        let footer = new Footer();
        footer.addLinks(
            {
                "Login": () => {
                    this.getRouter().load_page("login");
                }
            }
        )
        this.append(login_form);
        this.append(footer);
    }
    doRegister(data) {
        let url = this.getConfig().LINKS.register;
        this.getDi().Request.post(url, data, (data) => {
            if (data.success) {
                this.getRouter().load_page("login");
            }
        });
    }
}