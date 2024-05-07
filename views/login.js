import { Page } from '../Components/Page.js';
import { Form } from '../Components/Form.js';

export default class Login extends Page {
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
            }
        ];
        let url = this.getConfig().LINKS.login;
        let form_header = `<div style="text-align:center;"><img src="assets/logo.png" alt="logo" height="100" width="100"/></div>`;
        let login_form = new Form(url, "POST", form_data, (data)=>this.doLogin(data), form_header);
        this.append(login_form);
    }
    render() {
        this.prepare();
        this.style({
            backgroundImage:"url('assets/bg.png')",
            backgroundSize:"cover",
            backgroundPosition:"center center",
        })
        return super.render();
    }
    doLogin(data) {
        console.log(data);
    }
}