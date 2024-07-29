import {
  App,
} from "obsidian";

function printInternalPlugins(app: App): void {
  console.log(app.internalPlugins);
}

printInternalPlugins(app);

import type {
  InternalPlugins,
} from "obsidian-typings";

const internalPlugins: InternalPlugins = app.internalPlugins;

console.log(internalPlugins);

import { InternalPluginName } from "obsidian-typings/implementations";

app.internalPlugins.getEnabledPluginById(InternalPluginName.FileExplorer);
