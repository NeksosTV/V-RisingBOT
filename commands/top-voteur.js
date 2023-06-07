const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'top-voteurs',
  description: 'Affiche les meilleurs voteurs du site Top-Server',
  async execute(message) {
    try {
      const response = await fetch('https://api.top-serveurs.net/v1/servers/X2C8HC5WFP71/players-ranking');
      const data = await response.json();

      // Vérifier si la requête a réussi et si les joueurs sont présents dans la réponse
      if (data.success && data.players) {
        // Extraire les informations souhaitées de la réponse de l'API
        const voteurs = data.players
          .slice(0, 5) // Limiter à 5 noms de joueurs
          .map((player, index) => `${index + 1}. ${player.playername} (${player.votes})`);

        // Diviser les joueurs en groupes de trois
        const groupedVoteurs = [];
        for (let i = 0; i < voteurs.length; i += 3) {
          groupedVoteurs.push(voteurs.slice(i, i + 3));
        }

        // Création de l'embed avec les informations
        const embed = new Discord.MessageEmbed()
          .setTitle('Top Voteurs du site Top-Server (Mois dernier)')
          .setColor('#00ff00');

        // Ajouter les joueurs en tant que liste à puces avec trois joueurs par ligne
        groupedVoteurs.forEach((group) => {
          embed.addField('\u200B', group.join('\n'), true);
        });

        // Ajouter le logo de Top-Server en tant que miniature de l'embed
        embed.setThumbnail('https://www.survivalservers.com/themes/epona/images/promo_sliders/vrising-gloomrot-logo.png');

        // Envoi de l'embed dans le canal où la commande a été effectuée
        message.channel.send(embed);
      } else {
        console.error('La requête API a échoué ou les données des joueurs sont manquantes.');
      }

    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des meilleurs voteurs :', error);
      // Gérer l'erreur ou envoyer un message indiquant qu'il y a eu une erreur lors de la récupération des informations
    }
  },
};
