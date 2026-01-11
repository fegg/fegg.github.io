import fs from 'node:fs';
import path from 'node:path';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import { spectreDark } from './src/ec-theme';
import spectre from './package/src/integration';
import { SITE } from './src/constants';

// https://astro.build/config
const config = defineConfig({
	site: 'https://fegg.github.io',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: SITE.title,
			openGraph: {
				home: {
					title: SITE.title,
					description: SITE.description,
				},
				blog: {
					title: 'Blog',
					description: 'My blog posts.',
				},
				projects: {
					title: 'Projects',
				},
			},
			giscus: false,
		}),
	],
	adapter: node({
		mode: 'standalone',
	}),
	vite: {
		plugins: [
			{
				name: 'serve-pagefind-dev',
				configureServer(server) {
					server.middlewares.use((req, res, next) => {
						if (req.url?.startsWith('/pagefind/')) {
							// Handle query parameters by parsing the URL
							const url = new URL(req.url, 'http://localhost');
							const filePath = path.join(process.cwd(), 'dist/client', url.pathname);
							if (fs.existsSync(filePath)) {
								const stat = fs.statSync(filePath);
								if (stat.isFile()) {
									const ext = path.extname(filePath);
									let contentType = 'application/octet-stream';
									if (ext === '.js') contentType = 'text/javascript';
									else if (ext === '.css') contentType = 'text/css';
									else if (ext === '.json') contentType = 'application/json';
									else if (ext === '.wasm') contentType = 'application/wasm';
									else if (ext === '.pf_meta') contentType = 'application/octet-stream';

									res.setHeader('Content-Type', contentType);
									fs.createReadStream(filePath).pipe(res);
									return;
								}
							}
						}
						next();
					});
				},
			},
		],
	},
});

export default config;
