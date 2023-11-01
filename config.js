
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6281332905229']  
global.mods = ['6281332905229'] 
global.prems = ['6281332905229']
global.nameowner = 'Rann プラセチョ'
global.numberowner = '6281332905229' 
global.mail = 'ryunatachi@gmail.com' 
global.dana = '6281332905229'
global.pulsa = '6281332905229'
global.gopay = '6281332905229'
global.namebot = 'Rann-MD'
global.gc = 'https://chat.whatsapp.com/KhNWEPoIXWyKTcaafmGTZu'
global.web = 'https://github.com/yugsjy'
global.instagram = 'https://instagram.com/rannxyza'
global.wm = 'By Rann-MD'
global.watermark = wm
global.wm2 = '⫹⫺ Bot By'
global.wm3 = '© Rann-MD'
global.wm4 = 'made by Rann-MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Rann-MD Corp'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/d577685b672643f31dc05.jpg'

//===> Apikey
global.lann = 'nsbu98IF' //isi apikey mu https://api.betabotz.org
global.btc = 'nBByTr8x'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'nsbu98IF' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
