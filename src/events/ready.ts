import { BotEvent } from "../types";
import { Client, Events } from "discord.js";

const event: BotEvent = {
    name: Events.ClientReady,
    once: true,
    execute(client: Client) {
        console.log((`Connecté ${client.user?.tag}`))
    },
}

export default event;