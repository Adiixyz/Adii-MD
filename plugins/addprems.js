const { MessageType } = require('@adiwajshing/baileys-md')

let handler = async(m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah,dan masukkan nomor untuk di verivikasi !'
        // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].premium = true
    var nomor = m.sender
    m.reply(`*Done berhasil added User✅*\n\n*Nomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expired:* 30Days\n*Thanks For Added Premium !*`)
        // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems <nomor>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler