import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private"

export const load: PageServerLoad = async() => {
    let response = await fetch(env.BACKEND_BASE_URL);
    let shore = await response.json() as Shore;
        
    return {
        shore
    };
};