import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from "$env/dynamic/private";

export const GET: RequestHandler = async ({ url }) => {
    let debug = url.searchParams.get('debug') ?? false;
    let backend_url = `${env.BACKEND_BASE_URL}${debug ? "/debug" : ""}`
    let response = await fetch(backend_url);
    
    return json(await response.json());
};