import { SlashCommandBuilder, CommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("send_sticker")
    .setDescription("Send a sticker"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply({ content: "sticker incoming!" });
    await interaction.channel?.send({ stickers: ["1215147252465795163"] });
  },
};
