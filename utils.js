import { Config } from "./config.js";

export const DI = {};
DI.Request = {
    getLike: (url, method, callback = (r) => console.log(r)) => {
        fetch(url, {
            method: method,
            headers: DI.Request.headers
        })
            .then((response) => response.json())
            .then((data) => callback(data));
    },
    postLike: (url, data, callback = (r) => console.log(r)) => {
        fetch(url, {
            method: "POST",
            headers: DI.Request.headers,
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => callback(data));
    },
    get: (url, callback = (r) => console.log(r)) => {
        this.getLike(url, "GET", callback);
    },
    delete: (url, callback = (r) => console.log(r)) => {
        this.getLike(url, "DELETE", callback);
    },
    post: (url, data, callback = (r) => console.log(r)) => {
        this.postLike(url, data, callback);
    },
    patch: (url, data, callback = (r) => console.log(r)) => {
        this.postLike(url, data, callback);
    },
    headers: Config.HEADERS
}
