const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('test buttons using this command'),
	async execute(interaction) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Primary')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('secondary')
                .setLabel('Secondary')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('success')
                .setLabel('Success')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('danger')
                .setLabel('Danger')
                .setStyle('DANGER'),
            new MessageButton()
                .setLabel('Link')
                .setStyle('LINK')
                .setURL('http://simonstudios.ga/'),
        );
    

        const embed1 = new MessageEmbed()
        .setColor('#fdd835')
        .setTitle('Calculation')
        .setURL('http://simonstudios.ga/')
        .setDescription(`tgucv `);
        //`Calculation ${n} + ${n1} by ${a}`
        //.setFooter({text: }); 

        await interaction.reply({
            embeds: [embed1],
            components: [row]
        });
	},
};