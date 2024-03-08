import {
  SlashCommandBuilder,
  AttachmentBuilder,
  CommandInteraction,
} from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply({ content: "Pong!" });
  },
};
