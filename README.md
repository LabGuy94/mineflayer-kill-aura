# What is this?

Its a plugin for mineflayer that can be used to make your bot automatically kill mobs in its range

# Installation

`npm i mineflayer-kill-aura --save`

# Usage

```
const mineflayer = require('mineflayer')
const killaura = require('mineflayer-kill-aura')

const bot = mineflayer.createBot({
  host: 'localhost', // minecraft server ip
  username: 'bot1', // minecraft username
})
bot.on("physicsTick", async () => {
    bot.killaura.aura()
})

```

## WORK IN PROGRESS
