export const Config = {};

Config.HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

Config.HOST = "http://localhost:8080";

Config.LINKS = {
    getChat: `${Config.HOST}/chats`,
    login: `${Config.HOST}/user/login`,
    getMessages: `${Config.HOST}/messages`,
}