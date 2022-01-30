const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('login')
		.setDescription('prihlási vás lol test xd lmao'),
	async execute(interaction) {
        let profileData;
        try{
            profileData = await profileModel.findOne({ userID:interaction.user.id});
            if(!profileData){
                let profile = await profileModel.create({
                    userID: interaction.user.id,
                    serverID: interaction.guild.id,
                    moons: 100,
                    suns: 10,
                    energy: 30,
                    specialMessage: 'false',
                    stringSpecialMessage: 'none / error',
                    version: 1,
                    terminated: 'false',
                    terminatedTimeOut: null,
                    deleted: 'false',
                });
                profile.save();
                await interaction.reply('Lgged in')
            }else{
                await interaction.reply('You alredy have an account')
            }
        }catch(err){
            console.log(err)
        }

	},
};