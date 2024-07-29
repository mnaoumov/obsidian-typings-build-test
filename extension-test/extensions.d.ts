import CommentatorPlugin from "./main";


// METHOD 1: Does not work
/**
 * @note This is very important line, without it obsidian-typings definitions won't be picked up
 */
export {};

declare module "obsidian-typings" {
	interface Plugins {
		plugins: {
			"commentator": CommentatorPlugin;
		};
	}
}

// METHOD 2: Works
// import { Plugins as PluginsInterface } from "obsidian-typings";
//
// declare module "obsidian" {
// 	export interface Plugins extends PluginsInterface {
// 		plugins: PluginsInterface["plugins"] & {
// 			"commentator": CommentatorPlugin;
// 		};
// 	}
// }
//
