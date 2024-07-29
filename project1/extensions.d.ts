/**
 * @note This is very important line, without it obsidian-typings definitions won't be picked up
 */
export { };

declare module "obsidian-typings" {
  interface Plugins {
    plugins: {
      "commentator": CommentatorPlugin;
    };
  }
}
