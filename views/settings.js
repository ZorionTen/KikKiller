import { Label } from "../Components/Label.js";
import { Page } from "../Components/Page.js";
import { NavBar } from "../Components/NavBar.js";

export default class Settings extends Page {
    constructor() {
        super('div');
    }
    render() {
        this.append(
            new NavBar({
                "Home": () => {
                    this.getRouter().load_page("home");
                },
                Logout: () => {
                    localStorage.removeItem("token");
                    this.getRouter().load_page("home");
                }
            }),
        )
        this.append(
            new Label("WIP")
        );
        return super.render();
    }
}