let handler = async function (m) {
 await m.reply('Nih owner gw')
 this.sendContact(m.chat, '60199782326', 'Adii')
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
