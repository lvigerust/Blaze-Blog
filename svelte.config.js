import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components'
		}
	}
}

export default config
