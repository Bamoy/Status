const Discord = require("discord.js");

const jano = new Discord.Client();

jano.on("message", message => {

  if (!message.guild) return;

  if (message.content === "wara") {

    if (!message.author.id) return;

    if (message.member.voiceChannel) {

      message.member.voiceChannel

        .join()

        .then(connection => {

          message.reply("**basha qashmar**");

        })

        .catch(console.log);

    } else {

      message.reply("**bro vc**");

    }

  }

});

jano.on("ready", () => {

  console.log(`Online In Servers`);

  let statuses = [`JUST ALLAH`];

  setInterval(function() {


    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];

    jano.user.setActivity(STREAMING, {

      type: "playing",

      url: "https://www.twitch.tv/faith"

    });

  }, 2000);

});

jano.login("")
