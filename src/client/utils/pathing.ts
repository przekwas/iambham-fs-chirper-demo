export const pathing = (path: string) => {
    let id = '';
    if (path.includes('details')) {
        id = path.slice(9);
        path = '/details';
    } else if (path.includes('editing')) {
		id = path.slice(9);
        path = '/editing';
	}

	switch (path) {
		case '/':
			return 'Home';
		case '/compose':
			return 'Compose';
		case '/details':
			return `Chirp ${id} Details`;
		case '/editing':
			return `Editing Chirp ${id}`
		default:
			return '';
	}
};
