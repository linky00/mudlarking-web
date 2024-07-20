import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async() => {
    let response = await fetch('http://localhost:5555/');
    let shore = await response.json() as Shore;
        
    return {
        shore
    };
};