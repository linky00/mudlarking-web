import { type Writable, writable } from "svelte/store";

export const inventory: Writable<Item[]> = writable([]);
export const poems: Writable<string[]> = writable([]);