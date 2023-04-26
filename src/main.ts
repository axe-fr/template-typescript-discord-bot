import { Client, Collection, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { SlashCommand } from './types';
import { join } from 'path';
import { readdirSync } from 'fs';

dotenv.config()

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
    ]
  });

client.slashCommands = new Collection<string, SlashCommand>();

const loadDir = join(__dirname, "./load");

readdirSync(loadDir).forEach(handler => {
  require(`${loadDir}/${handler}`)(client);
});

client.login(process.env.TOKEN);