const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('work')
		.setDescription('pracuj'),
	async execute(interaction) {
        const profileModel = require('../models/profileSchema')
		const rn = Math.floor(Math.random() * 200) + 1;
		const data = await profileModel.findOne({ userID:interaction.user.id});
        const cooldown = new Set()

		if(cooldown.has(interaction.user.id)){
			interaction.reply('xDDDD')
		} else{
			if(!data){
				await interaction.reply('Oh no! vyzerá to tak že nemáš accout :cry: ! Použi "/login" na to aby si si ho vytvoril/vytvorila :)')
			 }else{
				 const d = await profileModel.findOneAndUpdate({
					 userID: interaction.user.id
				 }, {
					 $inc: {
						 moons: rn
					 }
				 }
				 )
				 return interaction.reply(`${interaction.user.username}, pracoval si a získal si ${rn} **moonov**`)
				
			 }
	 
		}
		
        
	},
};