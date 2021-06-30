module.exports.config = {
    name: "hi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kanichi",
    description: "",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": ""
    }
};
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let dt = await api.getUserInfo(event.senderID);
    let name = dt[event.senderID].name;
    var msg = {
				body: `Chào ${name}, chúc bạn một ngày mới tốt lành ❤️`,
				attachment: fs.createReadStream(__dirname + `/noprefix/hi.gif`)
			}
    if (event.body.toLowerCase() == "hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
	}
