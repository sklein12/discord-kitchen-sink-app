import {
  CommandInteraction,
  EmbedBuilder,
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} from "discord.js";

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("embed")
    .setType(ApplicationCommandType.Message),
  async execute(interaction: CommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle("Embed")
      .setImage(
        "https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Farticle%2F2021%2F12%2F13%2Fdiscord-wumpus-space_feature.png&width=2064&sign=QRKbEgd8dM9KAXq6FFoiMRrRB-lFnSfouSOQy0OwuLE"
      );
    await interaction.reply({
      embeds: [embed],
    });
  },
};
