let todos: Todo[] = [];

export const api = (request: Request, todo?: Todo, params?: any) => {
	let body = {};
	let status = 500;

	switch (request.method.toUpperCase()) {
		case 'GET':
			body = todos;
			status = 200;
			break;

		case 'POST':
			todos.push(todo);
			body = todo;
			status = 201;
			break;

		case 'DELETE':
			todos = todos.filter((todo) => todo.uid !== params.uid);
			break;

		default:
			break;
	}
	if (request.method.toUpperCase() !== 'GET') {
		return {
			status: 303,
			headers: {
				location: '/'
			}
		};
	}

	return { status, body };
};
