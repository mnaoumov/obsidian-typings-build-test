import CommentatorPlugin from "./main.ts";

declare module "obsidian-typings" {
  interface PluginsPluginsRecord {
    commentator: CommentatorPlugin
  }
}
