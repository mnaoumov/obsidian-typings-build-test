import type { IpcRenderer } from "electron";

const renderer: IpcRenderer | undefined = app.vault.adapter.ipcRenderer;
console.log(renderer);
