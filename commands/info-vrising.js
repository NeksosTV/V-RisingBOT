const Discord = require('discord.js');
const fetch = require('node-fetch');

// Fichier "vrising-info.js" dans le répertoire "commands"
module.exports = {
  name: 'info-vrising',
  description: 'Affiche les informations sur le serveur V-Rising',
  async execute(message) {
    try {
      const response = await fetch('https://vrising-servers.net/api/?object=servers&element=detail&key=wYsue08sd1BwNlj4CO4eoTxZcaAxYU4aE');
      const data = await response.json();

      // Extraire les informations souhaitées de la réponse de l'API
      const serverName = data.name;
      const serverIP = data.address;
      const port = data.port;
      const serverStatus = data.is_online === '1' ? 'En ligne' : 'Hors ligne';
      const serverPlayers = data.players;
      const maxPlayers = data.maxplayers;
      const bannerUrl = 'https://cdn.discordapp.com/attachments/1079781453744844880/1109089716122439772/gande_ban_maj.gif'; // Remplacez par l'URL de votre bannière GIF
    //   const namePlayers = data.players && Array.isArray(data.players.name) ? data.players.map(player => player.name) : [];
      const githubAccount  = 'https://github.com/NeksosTV'; // Remplacez par sont url de compte gitHub
     
      // Création de l'embed avec les informations
      const embed = new Discord.MessageEmbed()
        .setTitle('Informations sur le serveur V-Rising')
        .addField('Nom du serveur', serverName)
        .addField('IP', serverIP+ ':' + port)
        .addField('Statut du serveur', serverStatus)
        .addField('Joueurs en ligne', serverPlayers+ '/' + maxPlayers)
        // .addField('Nom Joueurs', namePlayers.length > 0 ? namePlayers.join('\n') : 'Aucun joueur en ligne')
        // .addField('GitHub :', `[.FLO.](${githubAccount})`)
        .setColor('#00ff00')
        .setThumbnail('https://www.survivalservers.com/themes/epona/images/promo_sliders/vrising-gloomrot-logo.png') // Remplacez par l'URL du logo pour le rendu
        .setImage(bannerUrl) // Définit la bannière GIF
        .setFooter('1nGames')
      // console.log(data);
      // Envoi de l'embed dans le canal où la commande a été effectuée
      message.channel.send(embed);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des informations sur le serveur V-Rising :', error);
      // Gérer l'erreur ou envoyer un message indiquant qu'il y a eu une erreur lors de la récupération des informations
    }
  },
};
