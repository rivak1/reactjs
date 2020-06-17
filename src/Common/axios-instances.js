import axios from 'axios';

// axios instance with authorization header
// export const axiosAuth = axios.create();
// axios instance with authorization header
export const axiosAuth = axios.create({
	headers: {
		'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
		'X-XSS-Protection': '1; mode=block',
        'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'sameorigin',
		'Content-Security-Policy': 'default-src "self"',
	},
});

//axios instance without header
export const axiosNoAuth = axios.create({
	headers: {
		'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
		'X-XSS-Protection': '1; mode=block',
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'sameorigin',
		'Content-Security-Policy': 'default-src "self"',
	},
});