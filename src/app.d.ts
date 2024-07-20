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

interface Shore {
	width: number;
	height: number;
	contents: Item[];
}

interface Item {
	text: string;
	id: string;
}