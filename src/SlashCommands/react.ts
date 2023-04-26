import { SlashCommandBuilder } from "discord.js"
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: 'react',
    data: new SlashCommandBuilder()
        .setName('react')
        .setDescription("Envoie un message avec une réation"),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Message avec réaction', fetchReply: true });
        await message.react('👋');
    }
}