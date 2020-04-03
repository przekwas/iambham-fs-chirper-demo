export const api = async <T = any>(uri: string, method: string = 'GET', body?: {}) => {
	const headers: Headers = {
		'Content-Type': 'application/json'
	};

	try {
		const res = await fetch(uri, {
			method,
			headers,
			body: JSON.stringify(body)
		});
		if (res.ok) {
			return <T>await res.json();
		} else {
            console.log('Bad Server Response: ', res);
        }
	} catch (error) {
		console.log('Fetch Error:', error);
	}
};

type Headers = {
	[key: string]: string;
};

export * as chirpsService from './chirps-service';

export * from './interfaces';