import { Collection, CommandInteraction, Message, PermissionResolvable, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js"

export interface BotEvent {
    name: string,
    once?: boolean | false,
    async execute: (...args?) => void
}

export interface SlashCommand {
    name: string,
    data: SlashCommandBuilder | any,
    async execute: (interaction : CommandInteraction) => Promise<void>,
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string
            TOKEN: string
        }
    }
}

declare module "discord.js" {
    export interface Client {
        slashCommands: Collection<string, SlashCommand>
    }
}