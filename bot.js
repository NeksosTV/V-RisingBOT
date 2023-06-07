require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const discordToken = process.env.DISCORD_TOKEN;
const topServerApiKey = process.env.TOP_SERVER_API_KEY;



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});



const prefix = '/'; // Définissez le préfixe de commande de votre choix

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Une erreur est survenue lors de l\'exécution de cette commande.');
  }
});
// Remplacez 'TOKEN_DU_BOT' par le token de votre bot Discord
client.login(discordToken);


