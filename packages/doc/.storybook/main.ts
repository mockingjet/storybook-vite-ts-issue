import { resolve } from 'path';
import { mergeConfig } from 'vite';
import babel from 'vite-plugin-babel';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
	stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/vue3',
	core: {
		builder: '@storybook/builder-vite',
	},
	async viteFinal(config) {
		const src = resolve(__dirname, 'src');
		const root = resolve(src, '../../');

		return mergeConfig(config, {
			resolve: {
				alias: { '@srx-ui': root },
			},
			plugins: [babel(), vueJsx()],
			// Add dependencies to pre-optimization
			optimizeDeps: {
				include: ['storybook-dark-mode'],
			},
		});
	},
};

export default config;
