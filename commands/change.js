const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('change')
		.setDescription('zmeňte moony na suny!')
        .addStringOption(option =>
            option.setName('konkrétne')
            .setDescription('Akú konkrétnu premenu chcete urobiť?')
            .addChoice('100M → 1S', '1')
            .addChoice('500M → 5S', '2')
            .addChoice('10 000M → 10S', '3')
            .addChoice('50 000M → 50S', '4')
            .setRequired(true)),
	async execute(interaction) {
        const ch = interaction.options.getString('konkrétne')
        const profileModel = require('../models/profileSchema')
		const data = await profileModel.findOne({ userID:interaction.user.id});
        if (data.moons >= 100){
            console.log('.')
        }
        if (data.moons >= 500){
            console.log('.')
        }
        if (data.moons >= 10000){
            console.log('.')
        }
        if (data.moons >= 50000){
            console.log('.')
        }


        if (ch == '1'){
            if(!data){
                await interaction.reply('Oh no! vyzerá to tak že nemáš accout :cry: ! Použi "/login" na to aby si si ho vytvoril/vytvorila :)')
            }else{
                if(data.moons >= 100){
                    const a = await profileModel.findOneAndUpdate({
                        userID: interaction.user.id
                    }, {
                        $inc: {
                            moons: -100,
                            suns: 1
                        }
                    }
                    )
                    const pfp = interaction.user.displayAvatarURL()

                    const embed = new MessageEmbed()
                    .setColor('#8bc34a')
                    .setTitle(`Change`)
                    .setDescription(`Váš balanc je: \n \n Moons: ${data.moons - 100} \n Suns: ${data.suns + 1} \n \n \n zmenil si 100M na 1S`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });
                    
                    
                    await interaction.reply({
                        embeds: [embed]
                    })
                }
                else{
                    const pfp = interaction.user.displayAvatarURL()
                    const embed = new MessageEmbed()
                    .setColor('#d50000')
                    .setTitle(`Change`)
                    .setDescription(`Oh nie! vyzerá to tak že nemáš dostatok moonov :/`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });

                    await interaction.reply({
                        embeds: [embed]
                    })
                }

            }
        }
        else if(ch == '2'){
            if(!data){
                await interaction.reply('Oh no! vyzerá to tak že nemáš accout :cry: ! Použi "/login" na to aby si si ho vytvoril/vytvorila :)')
            }else{
                if(data.moons >= 500){
                    const b = await profileModel.findOneAndUpdate({
                        userID: interaction.user.id
                    }, {
                        $inc: {
                            moons: -500,
                            suns: 5
                        }
                    }
                    )
                    const pfp = interaction.user.displayAvatarURL()

                    const embed = new MessageEmbed()
                    .setColor('#8bc34a')
                    .setTitle(`Change`)
                    .setDescription(`Váš balanc je: \n \n Moons: ${data.moons - 500} \n Suns: ${data.suns + 5} \n \n \n zmenil si 500M na 5S`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });
                    
                    
                    await interaction.reply({
                        embeds: [embed]
                    })
                }
                else{
                    const pfp = interaction.user.displayAvatarURL()
                    const embed = new MessageEmbed()
                    .setColor('#d50000')
                    .setTitle(`Change`)
                    .setDescription(`Oh nie! vyzerá to tak že nemáš dostatok moonov :/`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });

                    await interaction.reply({
                        embeds: [embed]
                    })
                }

            }
        }
        else if(ch == '3'){
            if(!data){
                await interaction.reply('Oh no! vyzerá to tak že nemáš accout :cry: ! Použi "/login" na to aby si si ho vytvoril/vytvorila :)')
            }else{
                if(data.moons >= 100){
                    const c = await profileModel.findOneAndUpdate({
                        userID: interaction.user.id
                    }, {
                        $inc: {
                            moons: -10000,
                            suns: 10
                        }
                    }
                    )
                    const pfp = interaction.user.displayAvatarURL()

                    const embed = new MessageEmbed()
                    .setColor('#8bc34a')
                    .setTitle(`Change`)
                    .setDescription(`Váš balanc je: \n \n Moons: ${data.moons - 10000} \n Suns: ${data.suns + 10} \n \n \n zmenil si 10 00M na 10S`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });
                    
                    
                    await interaction.reply({
                        embeds: [embed]
                    })
                }
                else{
                    const pfp = interaction.user.displayAvatarURL()
                    const embed = new MessageEmbed()
                    .setColor('#d50000')
                    .setTitle(`Change`)
                    .setDescription(`Oh nie! vyzerá to tak že nemáš dostatok moonov :/`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });

                    await interaction.reply({
                        embeds: [embed]
                    })
                }

            }
        }
        else if(ch == '4'){
            if(!data){
                await interaction.reply('Oh no! vyzerá to tak že nemáš accout :cry: ! Použi "/login" na to aby si si ho vytvoril/vytvorila :)')
            }else{
                if(data.moons >= 5000){
                    const d = await profileModel.findOneAndUpdate({
                        userID: interaction.user.id
                    }, {
                        $inc: {
                            moons: -50000,
                            suns: 50
                        }
                    }
                    )
                    const pfp = interaction.user.displayAvatarURL()

                    const embed = new MessageEmbed()
                    .setColor('#8bc34a')
                    .setTitle(`Change`)
                    .setDescription(`Váš balanc je: \n \n Moons: ${data.moons - 50000} \n Suns: ${data.suns + 50} \n \n \n zmenil si 50 00M na 50S`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });
                    
                    
                    await interaction.reply({
                        embeds: [embed]
                    })
                }
                else{
                    const pfp = interaction.user.displayAvatarURL()
                    const embed = new MessageEmbed()
                    .setColor('#d50000')
                    .setTitle(`Change`)
                    .setDescription(`Oh nie! vyzerá to tak že nemáš dostatok moonov :/`)
                    .setThumbnail('https://i.imgur.com/iqPeFux.png')
                    .setTimestamp()
                    .setFooter({ text: `${interaction.user.tag}`, iconURL: pfp });

                    await interaction.reply({
                        embeds: [embed]
                    })
                }

            }
        }
        
	},
};