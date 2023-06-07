const Discord = require('discord.js');


// Fichier "ip-vRsing.js" dans le répertoire "commands"
module.exports = {
    name: 'ip-v-rising',
    description: 'Affiche l ip du serveur V-Rising',
    execute(message) {
      // Récupération des informations du serveur V-Rising (à remplacer par les véritables appels API)
      const nombreJoueurs = 'soon/40 '; // Remplacez par le nombre de joueurs actuels
      const statutServeur = 'en ligne'; // Remplacez par le statut actuel du serveur (en ligne ou hors ligne)
      const nomServeur = '1nGames V Rising blood of moon'; // Remplacez par le nom de votre serveur
      const ipServeur = '185.239.211.29:31100'; // Remplacez par l'adresse IP de votre serveur
      const createurMod = 'Nom du créateur du mod'; // Remplacez par le nom du créateur du mod
      const githubAccount  = 'https://github.com/NeksosTV'; // Remplacez par sont url de compte gitHub
  
      // Création de l'embed avec les informations
      const embed = new Discord.MessageEmbed()
        .setTitle('Serveur V-Rising')
        // .addField('Nombre de joueurs', nombreJoueurs)
        //  .addField('Statut du serveur', statutServeur)
        .addField('Info Serveur :', nomServeur)
        .addField('IP :', ipServeur)
        // .addField('Créateur du Mod :', createurMod)
        .addField('GitHub du créateur :', `[.FLO.](${githubAccount})`)
        .setColor('#c80000')
        .setThumbnail('https://pbs.twimg.com/profile_images/1389868427548966916/oAxpKbTI_400x400.jpg'); // Remplacez par l'URL du logo pour le rendu
  
      // Envoi de l'embed dans le canal où la commande a été effectuée
      message.channel.send(embed);
    },
  };
  