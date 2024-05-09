import { Config } from "./config.js";

export const DI = {};
DI.Request = {
    getLike: (url, data = false, method, callback = (r) => console.log(r)) => {
        fetch(url + (data ? "?" + (new URLSearchParams(data)) : ""), {
            method: method,
            headers: DI.Request.headers
        })
            .then((response) => response.json())
            .then((data) => {
                if (!data.success) {
                    DI.Toast.error(data.message);
                }
                callback(data);
            }).catch((error) => {
                console.log(error)
                DI.Toast.error(error);
            });
    },
    postLike: (url, data, method, callback = (r) => console.log(r)) => {
        fetch(url, {
            method: method,
            headers: DI.Request.headers,
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                if (!data.success) {
                    DI.Toast.error(data.message);
                }
                callback(data);
            }).catch((error) => {
                console.log(error)
                DI.Toast.error(error);
            });
    },
    get: (url, data, callback = (r) => console.log(r)) => {
        DI.Request.getLike(url, data, "GET", callback);
    },
    delete: (url, data, callback = (r) => console.log(r)) => {
        DI.Request.getLike(url, data, "DELETE", callback);
    },
    post: (url, data, callback = (r) => console.log(r)) => {
        DI.Request.postLike(url, data, 'POST', callback);
    },
    patch: (url, data, callback = (r) => console.log(r)) => {
        DI.Request.postLike(url, data, 'PATCH', callback);
    },
    headers: Config.HEADERS
}

DI.Toast = {
    make: (message) => {
        let toast_area = document.getElementById("toast_area");
        let toast = document.createElement("div");
        toast.classList.add("toast");
        let toast_p = document.createElement("p");
        toast.appendChild(toast_p);
        toast_p.innerText = message;
        Object.entries({
            padding: "1rem 2rem 1rem 0.75rem",
            transform: "translateX(1rem)",
            margin: "0px",
            textAlign: "left"
        }).map(([k, v]) => toast_p.style[k] = v);
        Object.entries({
            borderRadius: "0.5rem",
            overflow: "hidden",
            backdropFilter: "blur(5px)",
        }).map(([k, v]) => toast.style[k] = v);
        return toast;
    },
    error: (message) => {
        let toast = DI.Toast.make(message);
        toast.classList.add("error");
        toast_area.appendChild(toast);
        setTimeout(() => {
            toast_area.removeChild(toast);
        }, 3000);
    },
    success: (message) => {
        let toast = DI.Toast.make(message);
        toast.classList.add("success");
        toast_area.appendChild(toast);
        setTimeout(() => {
            toast_area.removeChild(toast);
        }, 3000);
    }
}
