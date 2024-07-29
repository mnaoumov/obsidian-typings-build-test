import { around } from "monkey-around";
import {
  App,
  Plugin
} from "obsidian";

function printInternalPlugins(app: App): void {
  console.log(app.internalPlugins);
}

printInternalPlugins(app);

import {
  InternalPlugins,
  Plugins
} from "obsidian-typings";

const internalPlugins: InternalPlugins = app.internalPlugins;

console.log(internalPlugins);

import { InternalPluginName } from "obsidian-typings/implementations";

app.internalPlugins.getEnabledPluginById(InternalPluginName.FileExplorer);

interface Database {
  dropDatabase(): Promise<void>;
}

export default class CommentatorPlugin extends Plugin {
  remove_monkeys!: (() => void)[];
  database!: Database;

  do() {
    const z: Plugins = this.app.plugins;

    this.remove_monkeys.push(around(this.app.plugins, {
      // ERROR: Plugins does not have a method `uninstallPlugin`
      uninstallPlugin: (oldMethod) => {
        return async (id: string) => {
          oldMethod && await oldMethod.apply(this.app.plugins, [id]);
          if (id === "commentator")
            await this.database.dropDatabase();
        };
      },
    }));
  }
}

