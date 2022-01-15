let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085713964963]
│ • Gopay [085713964963]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
