import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const del: RequestHandler = async ({ request, params }) => {
	return api(request, null, params);
};

export const patch: RequestHandler = async ({ request, params }) => {
	const formData = await request.formData();

	return api(
		request,
		{
			done: formData.get('done') ? !!formData.get('done') : undefined,
			text: formData.get('text') as string
		},
		params
	);
};
