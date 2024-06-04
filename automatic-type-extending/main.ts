import { App } from "obsidian";

/**
 * @note if you aliased `@types/obsidian-typings`,
 * you cannot access implementations using `import { ... } from "obsidian-typings/implementations";`
 * you can access it only manually traversing through `node_nodules` folder
 */
import { InternalPluginName } from "./node_modules/@types/obsidian-typings/lib/implementations.js";

console.log(InternalPluginName.FileExplorer);

const app2: App = window.app;
console.log(app2.internalPlugins);
