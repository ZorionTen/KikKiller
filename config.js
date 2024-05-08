export const Config = {};

Config.HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

Config.HOST = "http://localhost:5000";

Config.LINKS = {
    getChat: `${Config.HOST}/chats`,
    login: `${Config.HOST}/user/login`,
    register: `${Config.HOST}/user/register`,
    getMessages: `${Config.HOST}/messages`,
}