require('dotenv').config()
const { Client, IntentsBitField } = require("discord.js");
const token = process.env['TOKEN'];
const hypeMan = require("./Bot/hype-man");
const Database = require("@replit/database");
const keepAlive = require("./server");

const client = new Client({
     intents: [
          IntentsBitField.Flags.Guilds,
          IntentsBitField.Flags.GuildMessages,
          IntentsBitField.Flags.GuildMessageTyping,
          IntentsBitField.Flags.GuildEmojisAndStickers,
          IntentsBitField.Flags.DirectMessages,
          IntentsBitField.Flags.DirectMessageReactions,
          IntentsBitField.Flags.DirectMessageTyping,
          IntentsBitField.Flags.MessageContent
     ]
});
const db = new Database();

const starterEncouragements = [
     "Cheer up, g",
     "Hang in there, fam",
     "You're that guy"
]

db.get("encouragements").then(contents => {
     if (!contents || contents.length < 1) {
          db.set("encouragements", starterEncouragements)
     }
});

db.get("responding").then(value => {
     if(value == null){
          db.set("responding", true);
     }
})

function updateContents(msg) {
     db.get("encouragements").then(contents => {
          contents.push(msg);
          db.set("encouragements", contents);
     })
}

function deleteContents(index) {
     db.get("encouragements").then(contents => {
          if (contents.length > index) {
               contents.splice(index, 1);
               db.set("encouragements", contents);
          }
     })
}

function handleMessage(msg) {
     if (msg.author.bot) {
          return true;
     }
     if (msg.content == "$inspire") {
          const inspRes = hypeMan.quote();
          inspRes.then((res) => {
               msg.quote(res);
               return true;
          });
     }
     if (msg.content.startsWith("$new")) {
          const newMsg = msg.content.split("$new ")[1];
          updateContents(newMsg);
          msg.channel.send(`Added New Encouraging Response: "${newMsg}"`);
     }
     if (msg.content.startsWith("$del")) {
          const index = parseInt(msg.content.split("$del ")[1]);
          db.get("encouragements").then((contents) => {
               deleteContents(index);
               msg.channel.send(`Deleted Encouraging Response: "${contents[index]}"`);
          });
     }
     db.get("responding").then(responding => {
          if(responding){
               if (msg.content == "wags") {
                    msg.reply("yo");
                    return true;
               }
               if (msg.content == "yo") {
                    msg.reply("wags");
                    return true;
               }
               if (hypeMan.feedbackRes.includes(msg.content)) {
                    msg.reply(hypeMan.static(24)).then(() => {
                         msg.react("💖");
                    });
               }
               if (hypeMan.staticRes.some(res => msg.content.includes(res))) {
                    hypeMan.staticRes.forEach(res => {
                         if (msg.content.includes(res)) {
                              const reply = hypeMan.static(hypeMan.staticRes.indexOf(res));
                              msg.reply(reply);
                         }
                    });
                    return true
               } else if (hypeMan.sadWords.some(res => msg.content.includes(res))) {
                    db.get("encouragements").then((encouragements) => {
                         const encouragement = encouragements[hypeMan.getRandom(encouragements.length)];
                         const final = typeof (encouragement) == "string" ? encouragement : toString(encouragement);
                         msg.reply(final);
                    });
                    return true;
               }
          }
     });
     if(msg.content.startsWith("$list")){
          db.get("encouragements").then(encouragement => {
               msg.channel.send(encouragement.join("\n"));
          });
     }
     if(msg.content.startsWith("$respond")){
          value = msg.content.split("$respond ")[1];
          if(value.toLowerCase() == "true"){
               db.set("responding", true);
               msg.channel.send(`${client.user.tag} is now responding`);
          }else{
               db.set("responding", false);
               msg.channel.send(`${client.user.tag} is no longer responding`);
          }
     }
}

client.on("ready", () => {
     console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
     handleMessage(msg);
});

keepAlive();
client.login(token);