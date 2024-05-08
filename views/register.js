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
                name: "username",
                placeholder: "Username"
            },
            {
                type: "password",
                name: "password",
                placeholder: "Password"
            },
            {
                type: "password",
                name: "confirm_password",
                placeholder: "Confirm password"
            }
        ];
        let url = this.getConfig().LINKS.login;
        let form_header = `<div style="text-align:center;"><img src="assets/logo.png" alt="logo" height="100" width="100"/></div>`;
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
            console.log(data);
        });
    }
}