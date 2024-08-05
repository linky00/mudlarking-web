import { writable, type Writable } from "svelte/store";

export let poem = writable("");
export let selectedItems: Writable<string[]> = writable([]);