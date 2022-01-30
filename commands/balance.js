const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balance')
		.setDescription('Ukáže koľko máte peniažkov'),
	async execute(interaction) {
        const support = require('../index.js')
        let Data1;

        Data1 = await profileModel.findOne({ userID:interaction.user.id});
        if(!Data1){
            await interaction.reply('Oh no! vyzerá to tak že nemáš accout :cry: ! Použi "/login" na to aby si si ho vytvoril/vytvorila :)')
        }else{
            const pfp = interaction.user.displayAvatarURL()
            const embed = new MessageEmbed()

            .setColor('#fdd835')
            .setTitle(`Balance`)
            //.setURL('https://www.google.com/search?q=calc&oq=calc&aqs=chrome.0.69i59j0i131i433i512j0i433i512j0i512l2j46i10i199i291i512j0i512l2j0i433i512j0i512.1184j0j7&sourceid=chrome&ie=UTF-8')
            .setDescription(`Váš balanc je: \n \n Moons: ${Data1.moons} \n Suns: ${Data1.suns}`)
            .setThumbnail('https://i.imgur.com/iqPeFux.png')
            .setTimestamp()
            .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });
            await interaction.reply({
                content: `/balance will be no longer supported! Try to use /stats instead \n\n What? ${support.support}`,
                embeds: [embed]
            })
        }
	},
};