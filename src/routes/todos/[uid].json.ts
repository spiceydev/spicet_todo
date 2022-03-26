import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const del: RequestHandler = async ({ request, params, }) => {
	return api(request, null, params);
};
