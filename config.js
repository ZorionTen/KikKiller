export const Config = {};

Config.HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

Config.HOST = "";

Config.LINKS = {
    get_chat: `${Config.HOST}/chats`,
    login: `${Config.HOST}/user/login`,
    register: `${Config.HOST}/user/register`,
    get_messages: `${Config.HOST}/messages`,
    get_user: `${Config.HOST}/user`,
}