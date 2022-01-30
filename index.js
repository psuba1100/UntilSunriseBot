const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const calc = require('./commands/calc')
const  mongoose = require('mongoose')
require('dotenv').config()

const support = null
module.exports.support = support

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: `Ajajaj niečo sa pokazilo! Nastala neznáma chyba počas používania tohto príkazu. Čo sa stalo: ${error}. Prosím kontaktujte vývojára.`, ephemeral: true });
	}

    const { commandName } = interaction;

    if (commandName === 'ping') {
		client.channels.cache.get('927619353405435914').send(`${interaction.user.tag} in #${interaction.channel.name} in ${interaction.guild.name} triggered an interaction: /ping command.`)
        console.log(`${interaction.user.tag} in #${interaction.channel.name} in ${interaction.guild.name} triggered an interaction: /ping command.`);
	} else if (commandName === 'server') {
		client.channels.cache.get('927619353405435914').send(`${interaction.user.tag} in #${interaction.channel.name} in ${interaction.guild.name} triggered an interaction: /server command.`)
        console.log(`${interaction.user.tag} in #${interaction.channel.name} in ${interaction.guild.name} triggered an interaction: /server command.`);
	} else if (commandName === 'používateľ') {
		client.channels.cache.get('927619353405435914').send(`${interaction.user.tag} in #${interaction.channel.name} in ${interaction.guild.name} triggered an interaction: /user command.`)
        console.log(`${interaction.user.tag} in #${interaction.channel.name} in ${interaction.guild.name} triggered an interaction: /user command.`);
	} else if (commandName == 'calc'){

		/*var p = calc.embedp
		var m = calc.embedm
		var n = calc.embedn
		var d = calc.embedd*/


		if(calc.o == '+'){
			client.channels.cache.get('927619353405435914').send({content:`in #${interaction.channel.name} in ${interaction.guild.name}` ,embeds: [calc.embedp]})
		}
		else if(calc.o == '-'){
			client.channels.cache.get('927619353405435914').send({content:`in #${interaction.channel.name} in ${interaction.guild.name}` ,embeds: [calc.embedm]})
		}
		else if(calc.o == '*'){
			client.channels.cache.get('927619353405435914').send({content:`in #${interaction.channel.name} in ${interaction.guild.name}` ,embeds: [calc.embedn]})
		}
		else if(calc.o == '/'){
			client.channels.cache.get('927619353405435914').send({content:`in #${interaction.channel.name} in ${interaction.guild.name}` ,embeds: [calc.embedd]})
		}
		else{
			return
		}
    }
});



mongoose.connect(process.env.MONGODB_SRV, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	//userFindAndModify: false
}).then(() =>{
	console.log('Connected db')
}).catch((err) =>{
	console.log(err)
})

client.login(process.env.TOKEN);
