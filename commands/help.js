const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Potrebuješ pomoc? Použi tento command!')
        .addStringOption(option =>
            option.setName('detaily')
            .setDescription('S čím konkrétne potrebuješ pomôcť?')
            .addChoice('S príkazmy?', '1')
            .addChoice('Support?', '2')
            .addChoice('Podporiť nás?', '3')
            .setRequired(true)),

	async execute(interaction) {
        const pfp = interaction.user.displayAvatarURL()
		const com = new MessageEmbed()
        .setColor('#fdd835')
        .setTitle('Príkazy:')
        .addField('smenu', 'Testovací command', true)
        .addField('server', 'Informácie o servery', true)
        .addField('používateľ', 'Informáie o vás', true)
        .addField('ping', 'bot odpovie pong', true)
        .addField('help', 'Help command', true)
        .addField('calc', 'Sčíta odčíta vynásobí alebo vydelí 2 čísla', true)
        .addField('button', 'testovací command', true)
        .setTimestamp()
        .setThumbnail('https://i.imgur.com/iqPeFux.png')
        .setFooter({ text: `Until sunrise 2022 ${interaction.user.tag}`, iconURL: pfp });

        const sup = new MessageEmbed()
        .setColor('#fdd835')
        .setTitle('Support:')
        .setDescription('Je nám to ľúto! Zatiaľ žiaden support nemáme :cry:')
        .setTimestamp()
        .setThumbnail('https://i.imgur.com/iqPeFux.png')
        .setFooter({ text: `Until sunrise 2022 ${interaction.user.tag}`, iconURL: pfp });

        const supus = new MessageEmbed()
        .setColor('#fdd835')
        .setTitle('Support:')
        .setDescription('Je nám to ľúto! Zatiaľ nás nemôžete podporiť :cry:')
        .setTimestamp()
        .setThumbnail('https://i.imgur.com/iqPeFux.png')
        .setFooter({ text: `Until sunrise 2022 ${interaction.user.tag}`, iconURL: pfp });

        const hw = interaction.options.getString('detaily')

        if(hw == '1'){
            await interaction.reply({
                embeds: [com]
            })
        }
        else if(hw == '2'){
            await interaction.reply({
                embeds: [sup]
            })
        }
        else if(hw == '3'){
            await interaction.reply({
                embeds: [supus]
            })
        }
        else{
            return
        }
    }
};