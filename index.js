const { Client, GatewayIntentBits, messageLink, Guild } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildPresences,
  ],
});

client.once('ready', async() => {
  console.log(`Logged in as ${client.user.tag}`);
 
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    console.log('Bot');
    return;
  }

  if (message.content === 'hi') {
    message.reply('Hello, world!');
  } else {
    console.log('Hello');
  }
});
let i = 3;

client.on('interactionCreate', async(interaction) => {
  if (!interaction.isCommand()) return;
 

  const { commandName } = interaction;

  if (commandName === 'access') {
    interaction.reply( { content:'Enter Pass' , ephemeral: true});
    let i =3;
    client.on ('messageCreate',(message)=>{
 
     

      while (i>-1) {
        if (message.author.bot) {
          
          return;
        }
        
    
        
        if (message.content == "123") {
          
        message.reply({content:'Access Granted', ephemeral: true});
          const channel = message.guild.channels.cache.get('1190236161180971028');
        const user = message.guild.members.cache.get(message.author.id);

        channel.permissionOverwrites.edit(user.id, { ViewChannel: true });
         
          
          return i=-1;

        } else {
          if (message.author.bot) {
            
            return;
          } 
          if (!interaction.isCommand()) return;
      
            else if (message.content != "123") {
            if(i!==0)
            {
              message.reply({content:"Try Again!!!!!!", ephemeral: true});
              i -= 1;
              console.log(i)
            return;

            }
            else if (i==0)
            {
            message.reply( {content:"Banned, contact admin" , ephemeral: true });
            return i=-1;
            }

              
            
          }
          
        }
      }
      

    });


 
  }
 //AFK
 if (interaction.isCommand() && interaction.commandName === 'afk') {
  const channel = interaction.guild.channels.cache.get('1190236161180971028');
  const user = interaction.guild.members.cache.get(interaction.user.id);

  await channel.permissionOverwrites.edit(user.id, { ViewChannel: false });
  await interaction.reply({content:'You have been set as AFK.' , ephemeral: true});

  // Optional: Log the username
  console.log(interaction.user.username);
}

 
});




client.login('MTE4NzY4NjYwNDU1OTYyMjE0NQ.G0sdl1.piPOx0hdai1gIp5JWj9AwKPgVjUgrNrVwaspkk');
