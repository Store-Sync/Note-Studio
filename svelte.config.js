import { vitePreprocess } from '@sveltejs/kit/vite';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const netlify = require('@sveltejs/adapter-netlify')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: netlify()
	}
};

export default config;
