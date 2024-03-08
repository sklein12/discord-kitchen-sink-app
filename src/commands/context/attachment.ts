import {
  ApplicationCommandType,
  AttachmentBuilder,
  CommandInteraction,
  ContextMenuCommandBuilder,
} from "discord.js";
import fs from "fs";
module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("send_attachment")
    .setType(ApplicationCommandType.Message),
  async execute(interaction: CommandInteraction) {
    await interaction.reply({
      content: "Pong!",
      files: [
        new AttachmentBuilder(fs.readFileSync("./images/larry.jpeg"), {
          name: `larry.jpeg`,
        }),
      ],
    });
  },
};
