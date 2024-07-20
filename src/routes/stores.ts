import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const inventory: Writable<Item[]> = writable([]);
export const poem = writable("");