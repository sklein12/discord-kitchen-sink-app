import {
  ApplicationCommandType,
  CommandInteraction,
  ContextMenuCommandBuilder,
} from "discord.js";
const fs = require("fs");
module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("hello")
    .setType(ApplicationCommandType.Message),
  async execute(interaction: CommandInteraction) {
    await interaction.reply({ content: "Pong!" });
  },
};
