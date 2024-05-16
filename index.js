import { DI } from './utils.js';
import { Config } from './config.js';

const Router = {};
Router.load_page = async (page) => {
    document.body.innerHTML = '';
    let component = await import(`./views/${page}.js`);
    let instance = new component.default();
    instance.getDi = () => DI;
    instance.getConfig = () => Config;
    instance.getRouter = () => Router;
    let elem = instance.render();
    document.body.appendChild(elem);
}

const components = [];

const render = () => {
    components.map((x) => {
        document.body.appendChild(x.render());
    });
}

onload = () => {
    if (localStorage.getItem("token")) {
        Router.load_page('home');
        console.log("token: " + localStorage.getItem("token"));
    } else {
        Router.load_page('login');
    }
    window.addEventListener("beforeinstallprompt", (event) => {
        console.log(event);
    });
}