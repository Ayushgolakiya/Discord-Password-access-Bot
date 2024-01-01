const { REST } = require('discord.js');
const { Routes } = require('discord-api-types/v10');
const YOUR_APPLICATION_ID= '1187686604559622145';
const GUILD_ID='1187314260435542056';
const YOUR_BOT_TOKEN='MTE4NzY4NjYwNDU1OTYyMjE0NQ.G0sdl1.piPOx0hdai1gIp5JWj9AwKPgVjUgrNrVwaspkk'
const registerCommands = async () => {
  const commands = [
    {
      name: 'access',
      description: 'Access the channel',
    },
    {
      name: 'afk',
      description: 'Access the channel',
    },
  ];

  const rest = new REST({ version: '10' }).setToken(YOUR_BOT_TOKEN); // Replace 'YOUR_BOT_TOKEN' with your actual bot token

  try {
    console.log('Started refreshing application (/) commands.');
    
    // Replace 'YOUR_APPLICATION_ID' with your bot's application ID
    // Replace 'GUILD_ID' with the ID of the guild where you want to register the commands
    await rest.put(
      Routes.applicationGuildCommands(YOUR_APPLICATION_ID, GUILD_ID),
      
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
};

// Call the function to register commands
registerCommands();
