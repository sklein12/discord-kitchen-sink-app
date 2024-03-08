import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
const fs = require("fs");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with Pong!"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply({ content: "Pong!" });
  },
};
