import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		// Specify other kit options as needed

		// Enable dynamic routing
		files: {
			assets: 'static',
			routes: 'src/routes',
		},

		adapter: adapter(),

		// Define your dynamic routes here
		// dynamic: [
		//   {
		//     path: '/book/:uid',
		//     method: 'get',
		//   },
		// ],
	},
};

export default config;
