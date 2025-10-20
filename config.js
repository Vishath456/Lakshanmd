const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "session id pest",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Vishath456/Lakshanmd/commit/2d6206819309e969a9f0aaa8455e98286c609e14",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 LAKSHAN-MD Is Alive Now😍*",
BOT_OWNER: '94765346615',  // Replace with the owner's phone number



};
