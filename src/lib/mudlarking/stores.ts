import { type Writable, writable } from "svelte/store";

export const bag: Writable<Item[]> = writable([]);