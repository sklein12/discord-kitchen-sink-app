import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Replies with only an embed!")
    .addBooleanOption((option) =>
      option
        .setName("with_content")
        .setDescription("Whether to include content")
        .setRequired(false)
    ),
  async execute(interaction: CommandInteraction) {
    const withContent = interaction.options.get("with_content");
    const embed = new EmbedBuilder()
      .setTitle("Embed")
      .setImage(
        "https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Farticle%2F2021%2F12%2F13%2Fdiscord-wumpus-space_feature.png&width=2064&sign=QRKbEgd8dM9KAXq6FFoiMRrRB-lFnSfouSOQy0OwuLE"
      );
    await interaction.reply({
      content: withContent ? "Embed!" : undefined,
      embeds: [embed],
    });
  },
};
