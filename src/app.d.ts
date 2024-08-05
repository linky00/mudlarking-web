// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

interface ShoreData {
	contents: Item[];
}

interface Item {
	text: string;
	line: number;
	offset: number;
	id: string;
}

interface ShoreItemData {
	item: Item,
	x: number,
	y: number,
	x2: number,
	y2: number,
	squashedText: string;
	collected: boolean
}