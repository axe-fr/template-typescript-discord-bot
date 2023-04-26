import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js"
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: 'ping',
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Affiche le ping du bot"),
    execute: async (interaction) => {
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: "Discordjs - TypeScript" })
                    .setDescription(`🏓 Pong! \n 📡 Ping: ${interaction.client.ws.ping}`)
                    .setColor('#6200b9')
            ]
        })
    }
}