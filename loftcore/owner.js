const settings = require('../settings');

async function ownerCommand(sock, chatId) {
  const vcardText = `
┏━━━━━┫ ʟᴏꜰᴛ Qᴜᴀɴᴛᴜᴍ™ OWNER ┣━━━━━┓
┃
┃ ✦ *Name*      : ${ownerName}
┃ ✦ *Role*      : Founder • Developer • CEO
┃ ✦ *Contact*   : @${ownerNumber}
┃
┃ ⚡ Professional Multi-Device WhatsApp Bot
┃ 🌙 Powered by Node.js & Baileys
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;

  const caption = `Owner: ʟᴏꜰᴛ Qᴜᴀɴᴛᴜᴍ™
Phone: +255778018545

${vcardText.trim()}`;

  await sock.sendMessage(chatId, {
    image: { url: './image.jpg' },
    caption: caption
  });
}

module.exports = ownerCommand;