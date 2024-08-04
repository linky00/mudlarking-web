import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from "$env/dynamic/private";

export const GET: RequestHandler = async () => {
    let response = await fetch(env.BACKEND_BASE_URL);
    
    return json(await response.json());
};