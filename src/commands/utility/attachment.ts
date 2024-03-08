import {
  SlashCommandBuilder,
  AttachmentBuilder,
  CommandInteraction,
} from "discord.js";
import fs from "fs";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("attachments")
    .setDescription("Replies with attachments!"),
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
