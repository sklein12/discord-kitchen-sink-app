import { REST, Collection, Routes } from "discord.js";

import { clientId, token } from "./config.json";
import fs from "fs";
import path from "path";

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

export async function syncCommands(commands: Collection<String, any>) {
  const json = commands.map((command) => command.data.toJSON());
  try {
    for (const command of json) {
      command.contexts = [0, 1, 2];
      command.integration_types = [0, 1];
    }
    console.log(
      `Started refreshing ${Object.keys(json).length} application (/) commands.`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(Routes.applicationCommands(clientId), {
      body: json,
    });

    console.log(data);

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
}
