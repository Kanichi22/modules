module.exports.config = {
	name: "out",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Kanichi",
	description: "Rời nhóm",
	commandCategory: "Admin",
	usages: "[id]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
	    if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}
