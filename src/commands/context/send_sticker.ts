import {
  ApplicationCommandType,
  CommandInteraction,
  ContextMenuCommandBuilder,
} from "discord.js";

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("send_sticker")
    .setType(ApplicationCommandType.Message),
  async execute(interaction: CommandInteraction) {
    await interaction.reply({ content: "sticker incoming!" });
    await interaction.channel?.send({ stickers: ["1215147252465795163"] });
  },
};
