const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const bot = new TelegramBot('501081546:AAHJVP4AIbRzzAIwsgh9k_Vcu-bWH_70eD4', {polling:  true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"`)
})