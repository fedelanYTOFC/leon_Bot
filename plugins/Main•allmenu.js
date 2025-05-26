import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
    try {
    let { exp, diamantes, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    exp = exp || 'Desconocida';
    role = role || 'Aldeano';

    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

        await m.react('💙')
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/ninsr8.jpg')

const vid = ['https://files.catbox.moe/y2p3f7.mp4', 'https://files.catbox.moe/y2p3f7.mp4', 'https://files.catbox.moe/y2p3f7.mp4']

        let menu = `
ㅤㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁ㅤㅤ𑁯💙ᰍㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁
೯ ׅ 👤 ¡Hᴏʟᴀ! ¿Cᴏᴍᴏ Esᴛᴀ́s? ׄ ᦡᦡ
ㅤ꒰͜͡${taguser}
ㅤㅤ♡𑂳ᩙㅤ ּ ${saludo} ׄ ㅤタス

  ⏤͟͞💙⃝⃦̸̷᪶᪶ᩘ✰ *.ᴘᴇʀfɪʟ*
  ⏤͟͞💙⃝⃦̸̷᪶᪶ᩘ✰ *.ᴍᴇɴᴜ*
  ⏤͟͞💙⃝⃦̸̷᪶᪶ᩘ✰ *.ɢʀᴜᴘᴏꜱ*
  ⏤͟͞💙⃝⃦̸̷᪶᪶ᩘ✰ *.creador*
  
  🌴 乂 *\`ɪᴀ\`* 乂 🌴
  
  ⏤͟͞💙⃝⃦̸̷᪶᪶ᩘ✰ *.ʀᴇᴍɪɴɪ*
  ⏤͟͞💙⃝⃦̸̷᪶᪶ᩘ✰ *.ʜᴅ*
  ⏤͟͞💙⃝⃦̸̷᪶᪶ᩘ✰ *.ᴇɴʜᴀɴᴄᴇ*
  .⁎✿ *.ᴡᴀʟʟᴘᴀᴘᴇʀ <Qᴜᴇʀʏ>* ✿ ⁎.
  .⁎✿ *.ɢᴇᴍɪɴɪ / ɪᴀ* ✿⁎.
  .⁎✿ *.ᴘɪxᴀɪ <Qᴜᴇʀʏ>* ✿⁎.
  
  🌴 乂 *\`ʙᴜꜱQᴜᴇᴅᴀꜱ\`* 乂 🌴

  .⁎✿ *.ɢᴏᴏɢʟᴇ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ᴛɪᴋᴛᴏᴋꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ʏᴛꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ɪᴍᴀɢᴇɴ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ᴘʟᴀʏ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ʏᴛᴅʟᴍᴘ3 <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ʏᴛᴅʟᴍᴘ4 <ᴛxᴛ>* ✿⁎.
  
  🌴 乂 *\`ᴊᴜᴇɢᴏꜱ\`* 乂 🌴

  .⁎✿ *.ᴀʙʀᴀᴢᴀʀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴀᴄᴇʀᴛɪᴊᴏ* ✿⁎.
  .⁎✿ *.ꜱᴏɴʀᴏᴊᴀʀꜱᴇ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴄᴏɴꜱᴇᴊᴏ* ✿⁎.
  .⁎✿ *.ᴇɴᴀᴍᴏʀᴀᴅᴀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴍᴇᴍᴇ* ✿⁎.
  .⁎✿ *.ᴀᴄᴀʀɪᴄɪᴀʀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴘᴇʀꜱᴏɴᴀʟɪᴅᴀᴅ* ✿⁎.
  .⁎✿ *.ᴘɪʀᴏᴘᴏ* ✿⁎.
  .⁎✿ *ᴘᴏQᴜᴇᴅᴇx <ᴘᴏᴋᴇᴍÓɴ>* ✿⁎.
  .⁎✿ *.ᴘʀᴇɢᴜɴᴛᴀ* ✿⁎.
  .⁎✿ *.ᴅᴏʀᴍɪʀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴛʀɪꜱᴛᴇ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴛᴏᴘ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ᴢᴏᴅɪᴀᴄ <2020 02 12> ✿⁎.

  🌴 乂 *\`ᴊᴀᴅɪʙᴏᴛ\`* 乂 🌴

  .⁎✿ *.ᴄᴏᴅᴇ* ✿⁎.
  .⁎✿ *.ꜱᴇʀʙᴏᴛ* ✿⁎.

  🌴 乂 *\`ꜱᴛɪᴄᴋᴇʀꜱ\`* 乂 🌴

  .⁎✿ *.Qᴄ* ✿⁎.
  .⁎✿ *.ꜱᴛɪᴋᴇʀ <ɪᴍɢ>* ✿⁎.
  .⁎✿ *.ꜱᴛɪᴄᴋᴇʀ <ᴜʀʟ>* ✿⁎.
  .⁎✿ *.ᴛᴀᴋᴇ <ɴᴏᴍʙʀᴇ/ᴀᴜᴛᴏʀ>* ✿⁎.

  🌴 乂 *\`ɴꜱꜰᴡ\`* 乂 🌴

  .⁎✿ *.xɴxxꜱᴇᴀʀᴄʜ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.xɴxxᴅʟ <ʟɪɴᴋ>* ✿⁎.

  🌴 乂 *\`ᴀɴɪᴍᴇꜱ\`* 乂 🌴

  .⁎✿ *.ʀᴜʟᴇ34 <ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴡᴀɪꜰᴜ* ✿⁎.
  .⁎✿ *.ʜᴇɴᴛᴀɪꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ʜᴇɴᴛᴀɪᴅʟ <ʟɪɴᴋ / ɪᴅ>* ✿⁎.

  🌴 乂 *\`ɢʀᴜᴘᴏꜱ\`* 乂 🌴

  .⁎✿ *.ʟɪɴᴋ* ✿⁎.
  .⁎✿ *.ɢʀᴜᴘᴏ ᴏᴘᴇɴ / ᴄʟᴏꜱᴇ* ✿⁎.
  .⁎✿ *.ᴅᴇʟᴇᴛᴇ* ✿⁎.
  .⁎✿ *.ᴅᴇᴍᴏᴛᴇ* ✿⁎.
  .⁎✿ *.ᴘʀᴏᴍᴏᴛᴇ* ✿⁎.
  .⁎✿ *.ʜɪᴅᴇᴛᴀɢ* ✿⁎.
  .⁎✿ *.ɪɴꜰᴏɢʀᴜᴘᴏ* ✿⁎.
  .⁎✿ *.ᴋɪᴄᴋ* ✿⁎.
  .⁎✿ *.ʟɪꜱᴛᴀᴅᴠ* ✿⁎.
  .⁎✿ *.ᴛᴀɢᴀʟʟ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ɪɴᴠᴏᴄᴀʀ <ᴛxᴛ>* ✿⁎.

  🌴 乂 *\`ᴏɴ / ᴏꜰꜰ\`* 乂 🌴

  .⁎✿ *.ᴇɴᴀʙʟᴇ* ✿⁎.
  .⁎✿ *.ᴅɪꜱᴀʙʟᴇ* ✿⁎.

  🌴 乂 *\`ᴅᴇꜱᴄᴀʀɢᴀꜱ\`* 乂 🌴

  .⁎✿ *.ꜰᴀᴄᴇʙᴏᴏᴋ - ꜰʙ* ✿⁎.
  .⁎✿ *.ɪᴍᴀɢᴇɴ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ɪɴꜱᴛᴀɢʀᴀᴍ - ɪɢ* ✿⁎.
  .⁎✿ *.ᴛɪᴋᴛᴏᴋ* ✿⁎.
  .⁎✿ *.ʏᴛᴍᴘ4* ✿⁎.
  .⁎✿ *.ʏᴛᴍᴘ3* ✿⁎.

  🌴 乂 *\`ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ\`* 乂 🌴

  .⁎✿ *.ᴛᴏᴀɴɪᴍᴇ* ✿⁎.
  .⁎✿ *.ʀᴇᴍɪɴɪ* ✿⁎.
  .⁎✿ *.ʜᴅ* ✿⁎.
  .⁎✿ *.ᴇɴʜᴀɴᴄᴇ* ✿⁎.
  .⁎✿ *.ꜱꜱᴡᴇʙ* ✿⁎.
  .⁎✿ *.ꜱꜱ* ✿⁎.
  .⁎✿ *.ᴛʀᴀᴅ* ✿⁎.

  🌴 乂 *\`ᴀᴜᴅɪᴏꜱ\`* 乂 🌴

  .⁎✿ *.ʙᴀꜱꜱ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ʙʟᴏᴡɴ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ᴅᴇᴇᴘ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ᴇᴀʀʀᴀᴘᴇ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜰᴀꜱᴛ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜰᴀᴛ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ɴɪɢʜᴛᴄᴏʀᴇ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ʀᴇᴠᴇʀꜱᴇ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ʀᴏʙᴏᴛ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜱʟᴏᴡ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜱᴍᴏᴏᴛʜ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ᴛᴜᴘᴀɪ <ᴠɴ>* ✿⁎.

  🌴 乂 *\`ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇꜱ\`* 乂 🌴

  .⁎✿ *.ᴛᴏɢɪꜰᴀᴜᴅ* ✿⁎.
  .⁎✿ *.ᴛᴏɪᴍɢ* ✿⁎.
  .⁎✿ *.ᴛᴏᴀᴜᴅɪᴏ* ✿⁎.

  🌴 乂 *\`ᴀᴅᴍɪɴ\`* 乂 🌴

  .⁎✿ *.ᴀᴅᴅᴘʀᴇᴍ2 <@ᴛᴀɢ> <ᴅᴀʏꜱ>* ✿⁎.
  .⁎✿ *.ᴀᴅᴅʏᴇɴ2 <@ᴛᴀɢ>* 

  `.trim()

        await conn.sendMessage(m.chat, {
            video: { url: vid.getRandom() }, // Vid
            caption: menu,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 999,
                externalAdReply: {
                    title: '⏤͟͞ू⃪ ፝͜⁞leon_Bot✰⃔࿐\nNᴜᴇᴠᴀ Vᴇʀsɪᴏɴ🌤️',
                    thumbnailUrl: perfil,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
            gifPlayback: true,
            gifAttribution: 0
        }, { quoted: null })
    } catch (e) {
        await m.reply(`*✖️ Ocurrió un error al enviar el menú.*\n\n${e}`)
    }
}

handler.help = ['menuff'];
handler.tags = ['main'];
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
